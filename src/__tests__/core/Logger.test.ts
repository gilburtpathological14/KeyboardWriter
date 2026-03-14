/**
 * Logger Tests
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Logger, LogLevel } from '../../core/Logger';

describe('Logger', () => {
  beforeEach(() => {
    // Set log level to DEBUG for most tests
    Logger.setLevel(LogLevel.DEBUG);
    Logger.clearHistory();

    // Mock console methods
    vi.spyOn(console, 'debug').mockImplementation(() => {});
    vi.spyOn(console, 'info').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('scope', () => {
    it('should create a scoped logger', () => {
      const logger = Logger.scope('TestScope');

      expect(logger).toBeDefined();
      expect(typeof logger.debug).toBe('function');
      expect(typeof logger.info).toBe('function');
      expect(typeof logger.warn).toBe('function');
      expect(typeof logger.error).toBe('function');
    });
  });

  describe('Log Levels', () => {
    it('should log debug messages when level is DEBUG', () => {
      const logger = Logger.scope('Test');

      logger.debug('Debug message');

      expect(console.debug).toHaveBeenCalled();
    });

    it('should log info messages', () => {
      const logger = Logger.scope('Test');

      logger.info('Info message');

      expect(console.info).toHaveBeenCalled();
    });

    it('should log warn messages', () => {
      const logger = Logger.scope('Test');

      logger.warn('Warning message');

      expect(console.warn).toHaveBeenCalled();
    });

    it('should log error messages', () => {
      const logger = Logger.scope('Test');

      logger.error('Error message');

      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('Log Level Filtering', () => {
    it('should not log debug when level is INFO', () => {
      Logger.setLevel(LogLevel.INFO);
      const logger = Logger.scope('Test');

      logger.debug('Debug message');

      expect(console.debug).not.toHaveBeenCalled();
    });

    it('should not log info when level is WARN', () => {
      Logger.setLevel(LogLevel.WARN);
      const logger = Logger.scope('Test');

      logger.info('Info message');

      expect(console.info).not.toHaveBeenCalled();
    });

    it('should not log warn when level is ERROR', () => {
      Logger.setLevel(LogLevel.ERROR);
      const logger = Logger.scope('Test');

      logger.warn('Warning message');

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('should log nothing when level is NONE', () => {
      Logger.setLevel(LogLevel.NONE);
      const logger = Logger.scope('Test');

      logger.debug('Debug');
      logger.info('Info');
      logger.warn('Warn');
      logger.error('Error');

      expect(console.debug).not.toHaveBeenCalled();
      expect(console.info).not.toHaveBeenCalled();
      expect(console.warn).not.toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
    });
  });

  describe('Message Formatting', () => {
    it('should include category in log message', () => {
      const logger = Logger.scope('MyComponent');

      logger.info('Test message');

      expect(console.info).toHaveBeenCalledWith('[MyComponent]', 'Test message');
    });

    it('should pass additional data', () => {
      const logger = Logger.scope('Test');
      const extraData = { key: 'value' };

      logger.info('Message', extraData);

      expect(console.info).toHaveBeenCalledWith('[Test]', 'Message', extraData);
    });
  });

  describe('Log History', () => {
    it('should store log entries in history', () => {
      const logger = Logger.scope('Test');

      logger.info('First message');
      logger.warn('Second message');

      const history = Logger.getHistory();
      expect(history.length).toBe(2);
      expect(history[0].message).toBe('First message');
      expect(history[1].message).toBe('Second message');
    });

    it('should clear history', () => {
      const logger = Logger.scope('Test');
      logger.info('Message');

      Logger.clearHistory();

      expect(Logger.getHistory().length).toBe(0);
    });
  });

  describe('Listeners', () => {
    it('should notify subscribers on log events', () => {
      const listener = vi.fn();
      const unsubscribe = Logger.subscribe(listener);
      const logger = Logger.scope('Test');

      logger.info('Test message');

      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({
          level: LogLevel.INFO,
          category: 'Test',
          message: 'Test message',
        })
      );

      unsubscribe();
    });

    it('should stop notifying after unsubscribe', () => {
      const listener = vi.fn();
      const unsubscribe = Logger.subscribe(listener);
      const logger = Logger.scope('Test');

      logger.info('First');
      unsubscribe();
      logger.info('Second');

      expect(listener).toHaveBeenCalledTimes(1);
    });
  });

  describe('Direct Logger Methods', () => {
    it('should support direct logging with category', () => {
      Logger.info('Direct', 'Direct message');

      expect(console.info).toHaveBeenCalledWith('[Direct]', 'Direct message');
    });
  });

  describe('getLevel', () => {
    it('should return current log level', () => {
      Logger.setLevel(LogLevel.WARN);

      expect(Logger.getLevel()).toBe(LogLevel.WARN);
    });
  });
});
