import { ExerciseMode } from '../domain/enums';
import type { Lesson, TypingSession, User } from '../domain/models';
import { createUser } from '../domain/models';
import { EventBus } from './EventBus';

/**
 * Application State Interface
 */
export interface AppState {
  // User
  user: User;
  isLoaded: boolean;

  // Current session
  currentSession: TypingSession | null;
  currentLesson: Lesson | null;
  currentExerciseIndex: number;

  // Mode
  exerciseMode: ExerciseMode;
  currentPage: string;

  // UI State
  isKeyboardVisible: boolean;
  isPaused: boolean;
  isModalOpen: boolean;
  activeModalId: string | null;

  // Live stats
  liveWPM: number;
  liveAccuracy: number;
}

/**
 * Create initial state
 */
function createInitialState(): AppState {
  return {
    user: createUser(),
    isLoaded: false,
    currentSession: null,
    currentLesson: null,
    currentExerciseIndex: 0,
    exerciseMode: ExerciseMode.LESSON,
    currentPage: 'home',
    isKeyboardVisible: true,
    isPaused: false,
    isModalOpen: false,
    activeModalId: null,
    liveWPM: 0,
    liveAccuracy: 100,
  };
}

type StateListener = (state: AppState, prevState: AppState) => void;
type StateSelector<T> = (state: AppState) => T;

/**
 * Global State Store with reactive updates
 */
class StoreImpl {
  private state: AppState;
  private readonly listeners: Set<StateListener> = new Set();
  private readonly selectorListeners: Map<StateSelector<unknown>, Set<(value: unknown) => void>> =
    new Map();

  constructor() {
    this.state = createInitialState();
  }

  /**
   * Get current state (readonly)
   */
  getState(): Readonly<AppState> {
    return this.state;
  }

  /**
   * Update state with partial updates
   */
  setState(partial: Partial<AppState>): void {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...partial };

    // Notify listeners
    this.listeners.forEach(listener => {
      try {
        listener(this.state, prevState);
      } catch (error) {
        console.error('Error in state listener:', error);
      }
    });

    // Notify selector listeners
    this.selectorListeners.forEach((callbacks, selector) => {
      const prevValue = selector(prevState);
      const newValue = selector(this.state);
      if (prevValue !== newValue) {
        callbacks.forEach(callback => {
          try {
            callback(newValue);
          } catch (error) {
            console.error('Error in selector listener:', error);
          }
        });
      }
    });
  }

  /**
   * Subscribe to all state changes
   */
  subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Subscribe to specific state slice changes
   */
  select<T>(selector: StateSelector<T>, callback: (value: T) => void): () => void {
    if (!this.selectorListeners.has(selector as StateSelector<unknown>)) {
      this.selectorListeners.set(selector as StateSelector<unknown>, new Set());
    }

    const callbacks = this.selectorListeners.get(selector as StateSelector<unknown>)!;
    callbacks.add(callback as (value: unknown) => void);

    // Call immediately with current value
    callback(selector(this.state));

    return () => {
      callbacks.delete(callback as (value: unknown) => void);
      if (callbacks.size === 0) {
        this.selectorListeners.delete(selector as StateSelector<unknown>);
      }
    };
  }

  /**
   * Reset state to initial
   */
  reset(): void {
    const prevState = { ...this.state };
    this.state = createInitialState();
    this.listeners.forEach(listener => listener(this.state, prevState));
  }

  // ============================================
  // Action Methods
  // ============================================

  /**
   * Set current lesson
   */
  setCurrentLesson(lesson: Lesson | null): void {
    this.setState({
      currentLesson: lesson,
      currentExerciseIndex: 0,
    });
    if (lesson) {
      EventBus.emit('lesson:select', { lessonId: lesson.id });
    }
  }

  /**
   * Set current session
   */
  setCurrentSession(session: TypingSession | null): void {
    this.setState({ currentSession: session });
  }

  /**
   * Update live statistics
   */
  updateLiveStats(wpm: number, accuracy: number): void {
    this.setState({ liveWPM: wpm, liveAccuracy: accuracy });
    EventBus.emit('stats:update', { wpm, accuracy });
  }

  /**
   * Navigate to page
   */
  navigateTo(page: string): void {
    this.setState({ currentPage: page });
    EventBus.emit('nav:change', { page });
  }

  /**
   * Toggle keyboard visibility
   */
  toggleKeyboard(): void {
    this.setState({ isKeyboardVisible: !this.state.isKeyboardVisible });
  }

  /**
   * Open modal
   */
  openModal(modalId: string): void {
    this.setState({ isModalOpen: true, activeModalId: modalId });
    EventBus.emit('nav:modal:open', { modalId });
  }

  /**
   * Close modal
   */
  closeModal(): void {
    const modalId = this.state.activeModalId;
    this.setState({ isModalOpen: false, activeModalId: null });
    if (modalId) {
      EventBus.emit('nav:modal:close', { modalId });
    }
  }

  /**
   * Set exercise mode
   */
  setExerciseMode(mode: ExerciseMode): void {
    this.setState({ exerciseMode: mode });
  }

  /**
   * Mark as loaded
   */
  setLoaded(loaded: boolean): void {
    this.setState({ isLoaded: loaded });
  }

  /**
   * Update user
   */
  updateUser(updates: Partial<User>): void {
    this.setState({
      user: { ...this.state.user, ...updates },
    });
  }
}

// Singleton instance
export const Store = new StoreImpl();

// Selectors for common state slices
export const Selectors = {
  user: (state: AppState) => state.user,
  currentLesson: (state: AppState) => state.currentLesson,
  currentSession: (state: AppState) => state.currentSession,
  liveWPM: (state: AppState) => state.liveWPM,
  liveAccuracy: (state: AppState) => state.liveAccuracy,
  currentPage: (state: AppState) => state.currentPage,
  isKeyboardVisible: (state: AppState) => state.isKeyboardVisible,
  exerciseMode: (state: AppState) => state.exerciseMode,
  userSettings: (state: AppState) => state.user.settings,
  userStatistics: (state: AppState) => state.user.statistics,
};
