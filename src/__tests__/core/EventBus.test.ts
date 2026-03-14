/**
 * EventBus Tests
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { EventBus } from '../../core/EventBus';

describe('EventBus', () => {
  beforeEach(() => {
    EventBus.clear();
  });

  afterEach(() => {
    EventBus.clear();
  });

  describe('on', () => {
    it('should subscribe to an event', () => {
      const callback = vi.fn();

      EventBus.on('nav:change', callback);
      EventBus.emit('nav:change', { page: 'home' });

      expect(callback).toHaveBeenCalledWith({ page: 'home' });
    });

    it('should allow multiple subscribers', () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      EventBus.on('nav:change', callback1);
      EventBus.on('nav:change', callback2);
      EventBus.emit('nav:change', { page: 'lessons' });

      expect(callback1).toHaveBeenCalledWith({ page: 'lessons' });
      expect(callback2).toHaveBeenCalledWith({ page: 'lessons' });
    });

    it('should return subscription with unsubscribe', () => {
      const callback = vi.fn();

      const subscription = EventBus.on('nav:change', callback);

      expect(subscription).toBeDefined();
      expect(typeof subscription.unsubscribe).toBe('function');
    });
  });

  describe('unsubscribe', () => {
    it('should stop receiving events after unsubscribe', () => {
      const callback = vi.fn();

      const subscription = EventBus.on('nav:change', callback);
      EventBus.emit('nav:change', { page: 'first' });

      subscription.unsubscribe();
      EventBus.emit('nav:change', { page: 'second' });

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({ page: 'first' });
    });

    it('should remove event key when last subscriber unsubscribes', () => {
      const callback = vi.fn();

      const subscription = EventBus.on('nav:change', callback);
      expect(EventBus.getListenerCount('nav:change')).toBe(1);

      subscription.unsubscribe();
      expect(EventBus.getListenerCount('nav:change')).toBe(0);
    });
  });

  describe('once', () => {
    it('should only trigger callback once', () => {
      const callback = vi.fn();

      EventBus.once('nav:change', callback);
      EventBus.emit('nav:change', { page: 'first' });
      EventBus.emit('nav:change', { page: 'second' });

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({ page: 'first' });
    });

    it('should return subscription that can be cancelled before trigger', () => {
      const callback = vi.fn();

      const subscription = EventBus.once('nav:change', callback);
      subscription.unsubscribe();
      EventBus.emit('nav:change', { page: 'test' });

      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('emit', () => {
    it('should pass data to callbacks', () => {
      const callback = vi.fn();

      EventBus.on('typing:complete', callback);
      EventBus.emit('typing:complete', { wpm: 75, accuracy: 98, time: 60 });

      expect(callback).toHaveBeenCalledWith({
        wpm: 75,
        accuracy: 98,
        time: 60,
      });
    });

    it('should not throw when emitting with no subscribers', () => {
      expect(() => {
        EventBus.emit('nav:change', { page: 'test' });
      }).not.toThrow();
    });

    it('should handle errors in callbacks without affecting others', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const callback1 = vi.fn(() => {
        throw new Error('Callback error');
      });
      const callback2 = vi.fn();

      EventBus.on('nav:change', callback1);
      EventBus.on('nav:change', callback2);
      EventBus.emit('nav:change', { page: 'test' });

      expect(callback1).toHaveBeenCalled();
      expect(callback2).toHaveBeenCalled();
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });

  describe('off', () => {
    it('should remove all listeners for an event', () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      EventBus.on('nav:change', callback1);
      EventBus.on('nav:change', callback2);

      EventBus.off('nav:change');
      EventBus.emit('nav:change', { page: 'test' });

      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).not.toHaveBeenCalled();
    });
  });

  describe('clear', () => {
    it('should remove all listeners', () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();

      EventBus.on('nav:change', callback1);
      EventBus.on('typing:complete', callback2);

      EventBus.clear();

      expect(EventBus.getListenerCount()).toBe(0);
    });
  });

  describe('getListenerCount', () => {
    it('should return 0 when no listeners', () => {
      expect(EventBus.getListenerCount()).toBe(0);
    });

    it('should return total listener count', () => {
      EventBus.on('nav:change', vi.fn());
      EventBus.on('nav:change', vi.fn());
      EventBus.on('typing:complete', vi.fn());

      expect(EventBus.getListenerCount()).toBe(3);
    });

    it('should return count for specific event', () => {
      EventBus.on('nav:change', vi.fn());
      EventBus.on('nav:change', vi.fn());
      EventBus.on('typing:complete', vi.fn());

      expect(EventBus.getListenerCount('nav:change')).toBe(2);
      expect(EventBus.getListenerCount('typing:complete')).toBe(1);
    });

    it('should return 0 for event with no listeners', () => {
      expect(EventBus.getListenerCount('nav:change')).toBe(0);
    });
  });

  describe('Type Safety', () => {
    it('should handle typing events correctly', () => {
      const callback = vi.fn();

      EventBus.on('typing:keystroke', callback);
      EventBus.emit('typing:keystroke', { key: 'a', isCorrect: true, position: 5 });

      expect(callback).toHaveBeenCalledWith({
        key: 'a',
        isCorrect: true,
        position: 5,
      });
    });

    it('should handle void events', () => {
      const callback = vi.fn();

      EventBus.on('typing:pause', callback);
      EventBus.emit('typing:pause', undefined as void);

      expect(callback).toHaveBeenCalled();
    });

    it('should handle achievement events', () => {
      const callback = vi.fn();

      EventBus.on('achievement:unlock', callback);
      EventBus.emit('achievement:unlock', { achievementId: 'speed-demon' });

      expect(callback).toHaveBeenCalledWith({ achievementId: 'speed-demon' });
    });

    it('should handle UI toast events', () => {
      const callback = vi.fn();

      EventBus.on('ui:toast', callback);
      EventBus.emit('ui:toast', { message: 'Test message', type: 'success' });

      expect(callback).toHaveBeenCalledWith({
        message: 'Test message',
        type: 'success',
      });
    });
  });
});
