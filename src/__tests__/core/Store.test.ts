/**
 * Store Tests
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Store } from '../../core/Store';
import { ExerciseMode } from '../../domain/enums';

describe('Store', () => {
  beforeEach(() => {
    Store.reset();
  });

  describe('Initial State', () => {
    it('should have correct initial values', () => {
      const state = Store.getState();

      expect(state.isLoaded).toBe(false);
      expect(state.currentSession).toBeNull();
      expect(state.currentLesson).toBeNull();
      expect(state.currentPage).toBe('home');
      expect(state.isPaused).toBe(false);
      expect(state.isModalOpen).toBe(false);
      expect(state.liveWPM).toBe(0);
      expect(state.liveAccuracy).toBe(100);
    });

    it('should have a default user', () => {
      const state = Store.getState();

      expect(state.user).toBeDefined();
      expect(state.user.id).toBeDefined();
      expect(state.user.level).toBe(1);
      expect(state.user.xp).toBe(0);
    });
  });

  describe('setState', () => {
    it('should update state with partial updates', () => {
      Store.setState({ liveWPM: 50, liveAccuracy: 95 });

      const state = Store.getState();
      expect(state.liveWPM).toBe(50);
      expect(state.liveAccuracy).toBe(95);
    });

    it('should notify subscribers on state change', () => {
      const listener = vi.fn();
      Store.subscribe(listener);

      Store.setState({ liveWPM: 60 });

      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith(
        expect.objectContaining({ liveWPM: 60 }),
        expect.objectContaining({ liveWPM: 0 })
      );
    });
  });

  describe('subscribe', () => {
    it('should return unsubscribe function', () => {
      const listener = vi.fn();
      const unsubscribe = Store.subscribe(listener);

      Store.setState({ liveWPM: 10 });
      expect(listener).toHaveBeenCalledTimes(1);

      unsubscribe();

      Store.setState({ liveWPM: 20 });
      expect(listener).toHaveBeenCalledTimes(1); // Still 1, not called again
    });
  });

  describe('select', () => {
    it('should call callback immediately with current value', () => {
      const callback = vi.fn();
      const selector = (state: ReturnType<typeof Store.getState>) => state.liveWPM;

      Store.select(selector, callback);

      expect(callback).toHaveBeenCalledWith(0);
    });

    it('should call callback only when selected value changes', () => {
      const callback = vi.fn();
      const selector = (state: ReturnType<typeof Store.getState>) => state.liveWPM;

      Store.select(selector, callback);
      callback.mockClear();

      // Change selected value
      Store.setState({ liveWPM: 50 });
      expect(callback).toHaveBeenCalledWith(50);

      // Change unrelated value
      Store.setState({ liveAccuracy: 90 });
      expect(callback).toHaveBeenCalledTimes(1); // Not called again
    });
  });

  describe('Action Methods', () => {
    it('navigateTo should update currentPage', () => {
      Store.navigateTo('lessons');

      expect(Store.getState().currentPage).toBe('lessons');
    });

    it('updateLiveStats should update WPM and accuracy', () => {
      Store.updateLiveStats(75, 98);

      const state = Store.getState();
      expect(state.liveWPM).toBe(75);
      expect(state.liveAccuracy).toBe(98);
    });

    it('toggleKeyboard should toggle visibility', () => {
      const initial = Store.getState().isKeyboardVisible;

      Store.toggleKeyboard();
      expect(Store.getState().isKeyboardVisible).toBe(!initial);

      Store.toggleKeyboard();
      expect(Store.getState().isKeyboardVisible).toBe(initial);
    });

    it('openModal should set modal state', () => {
      Store.openModal('settings');

      const state = Store.getState();
      expect(state.isModalOpen).toBe(true);
      expect(state.activeModalId).toBe('settings');
    });

    it('closeModal should clear modal state', () => {
      Store.openModal('settings');
      Store.closeModal();

      const state = Store.getState();
      expect(state.isModalOpen).toBe(false);
      expect(state.activeModalId).toBeNull();
    });

    it('setExerciseMode should update mode', () => {
      Store.setExerciseMode(ExerciseMode.CODE_MODE);

      expect(Store.getState().exerciseMode).toBe(ExerciseMode.CODE_MODE);
    });

    it('updateUser should merge user updates', () => {
      const originalId = Store.getState().user.id;

      Store.updateUser({ level: 5, xp: 1000 });

      const user = Store.getState().user;
      expect(user.id).toBe(originalId);
      expect(user.level).toBe(5);
      expect(user.xp).toBe(1000);
    });
  });

  describe('reset', () => {
    it('should reset state to initial values', () => {
      Store.setState({ liveWPM: 100, liveAccuracy: 50 });
      Store.navigateTo('statistics');

      Store.reset();

      const state = Store.getState();
      expect(state.liveWPM).toBe(0);
      expect(state.liveAccuracy).toBe(100);
      expect(state.currentPage).toBe('home');
    });
  });
});
