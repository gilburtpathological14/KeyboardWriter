import { EventBus, Store } from '../core';
import {
  ALL_LESSONS,
  getLessonById,
  getLessonsByCategory,
  getNextLesson,
  getProgrammingLessonsByLanguage,
  getShortcutLessonsByIDE,
  LESSON_CATEGORIES,
} from '../data/lessons';
import {
  Exercise,
  Lesson,
  LessonCategory,
  ProgrammingLesson,
  ShortcutLesson,
} from '../domain/models';

/**
 * Lesson completion result
 */
export interface LessonCompletionResult {
  lessonId: string;
  exerciseId: string;
  wpm: number;
  accuracy: number;
  time: number;
  passed: boolean;
  xpEarned: number;
}

/**
 * Exercise result
 */
export interface ExerciseResult {
  exerciseId: string;
  wpm: number;
  accuracy: number;
  time: number;
  errors: number;
}

/**
 * Lesson Service
 * Manages lessons, progress, and completion tracking
 */
class LessonServiceImpl {
  private currentLesson: Lesson | null = null;
  private currentExerciseIndex: number = 0;
  private exerciseResults: ExerciseResult[] = [];

  /**
   * Get all available lessons
   */
  getAllLessons(): Lesson[] {
    return ALL_LESSONS;
  }

  /**
   * Get all lesson categories
   */
  getCategories(): LessonCategory[] {
    return LESSON_CATEGORIES;
  }

  /**
   * Get lesson by ID
   */
  getLesson(id: string): Lesson | undefined {
    return getLessonById(id);
  }

  /**
   * Get lessons by category
   */
  getLessonsInCategory(categoryId: string): Lesson[] {
    return getLessonsByCategory(categoryId);
  }

  /**
   * Get recommended next lesson for user
   */
  getRecommendedLesson(): Lesson | undefined {
    const state = Store.getState();
    const completedLessons = state.user.statistics.completedLessons;
    return getNextLesson(Array.from(completedLessons));
  }

  /**
   * Get programming lessons by language
   */
  getProgrammingLessons(language: ProgrammingLesson['programmingLanguage']): ProgrammingLesson[] {
    return getProgrammingLessonsByLanguage(language);
  }

  /**
   * Get shortcut lessons by IDE
   */
  getShortcutLessons(ide: ShortcutLesson['ide']): ShortcutLesson[] {
    return getShortcutLessonsByIDE(ide);
  }

  /**
   * Start a lesson
   */
  startLesson(lessonId: string): Lesson | null {
    const lesson = getLessonById(lessonId);
    if (!lesson) {
      console.error(`Lesson ${lessonId} not found`);
      return null;
    }

    this.currentLesson = lesson;
    this.currentExerciseIndex = 0;
    this.exerciseResults = [];

    EventBus.emit('lesson:start', { lessonId });

    return lesson;
  }

  /**
   * Get current lesson
   */
  getCurrentLesson(): Lesson | null {
    return this.currentLesson;
  }

  /**
   * Get current exercise
   */
  getCurrentExercise(): Exercise | null {
    if (!this.currentLesson) {
      return null;
    }

    if (this.currentExerciseIndex >= this.currentLesson.exercises.length) {
      return null;
    }

    return this.currentLesson.exercises[this.currentExerciseIndex];
  }

  /**
   * Get current exercise index
   */
  getCurrentExerciseIndex(): number {
    return this.currentExerciseIndex;
  }

  /**
   * Get total exercises count
   */
  getTotalExercisesCount(): number {
    return this.currentLesson?.exercises.length ?? 0;
  }

  /**
   * Record exercise completion
   */
  completeExercise(result: ExerciseResult): boolean {
    if (!this.currentLesson) {
      return false;
    }

    this.exerciseResults.push(result);

    EventBus.emit('lesson:exerciseComplete', {
      lessonId: this.currentLesson.id,
      exerciseIndex: this.currentExerciseIndex,
      result,
    });

    // Move to next exercise
    this.currentExerciseIndex++;

    // Check if lesson is complete
    if (this.currentExerciseIndex >= this.currentLesson.exercises.length) {
      this.completeLesson();
      return true;
    }

    return false;
  }

  /**
   * Complete the current lesson
   */
  private completeLesson(): void {
    if (!this.currentLesson) {
      return;
    }

    // Calculate averages
    const avgWpm = Math.round(
      this.exerciseResults.reduce((sum, r) => sum + r.wpm, 0) / this.exerciseResults.length
    );
    const avgAccuracy = Math.round(
      this.exerciseResults.reduce((sum, r) => sum + r.accuracy, 0) / this.exerciseResults.length
    );
    const totalTime = this.exerciseResults.reduce((sum, r) => sum + r.time, 0);

    // Check if passed
    const targetWpm = this.currentLesson.targetWPM ?? 20;
    const targetAccuracy = this.currentLesson.targetAccuracy ?? 85;
    const passed = avgWpm >= targetWpm && avgAccuracy >= targetAccuracy;

    // Calculate XP
    const baseXp = 50;
    const wpmBonus = Math.max(0, avgWpm - targetWpm) * 2;
    const accuracyBonus = Math.max(0, avgAccuracy - targetAccuracy) * 3;
    const xpEarned = passed ? baseXp + wpmBonus + accuracyBonus : Math.round(baseXp / 2);

    const completionResult: LessonCompletionResult = {
      lessonId: this.currentLesson.id,
      exerciseId: this.currentLesson.exercises[this.currentLesson.exercises.length - 1].id,
      wpm: avgWpm,
      accuracy: avgAccuracy,
      time: totalTime,
      passed,
      xpEarned,
    };

    // Update user progress
    if (passed) {
      this.updateUserProgress(completionResult);
    }

    // Emit completion event
    EventBus.emit('lesson:complete', completionResult);

    // Reset state
    this.currentLesson = null;
    this.currentExerciseIndex = 0;
    this.exerciseResults = [];
  }

  /**
   * Update user progress after lesson completion
   */
  private updateUserProgress(result: LessonCompletionResult): void {
    const state = Store.getState();
    const user = state.user;

    // Add completed lesson
    user.statistics.completedLessons.add(result.lessonId);
    user.statistics.totalLessonsCompleted++;

    // Update XP
    user.xp += result.xpEarned;

    // Check for level up
    const xpForNextLevel = this.xpForLevel(user.level + 1);
    if (user.xp >= xpForNextLevel) {
      user.level++;
      EventBus.emit('ui:toast', {
        message: `Level Up! Du bist jetzt Level ${user.level}`,
        type: 'success',
      });
    }

    // Update averages
    const totalSessions = user.statistics.totalPracticeTimeMs / 60000 || 1;
    user.statistics.averageWPM = Math.round(
      (user.statistics.averageWPM * (totalSessions - 1) + result.wpm) / totalSessions
    );
    user.statistics.averageAccuracy = Math.round(
      (user.statistics.averageAccuracy * (totalSessions - 1) + result.accuracy) / totalSessions
    );

    // Update store
    Store.updateUser(user);
  }

  /**
   * Calculate XP needed for a level
   */
  private xpForLevel(level: number): number {
    return Math.floor(100 * Math.pow(1.5, level - 1));
  }

  /**
   * Skip to next exercise
   */
  skipExercise(): Exercise | null {
    if (!this.currentLesson) {
      return null;
    }

    this.currentExerciseIndex++;

    if (this.currentExerciseIndex >= this.currentLesson.exercises.length) {
      // Can't skip if it's the last exercise
      this.currentExerciseIndex = this.currentLesson.exercises.length - 1;
    }

    return this.getCurrentExercise();
  }

  /**
   * Restart current lesson
   */
  restartLesson(): Lesson | null {
    if (!this.currentLesson) {
      return null;
    }

    const lessonId = this.currentLesson.id;
    return this.startLesson(lessonId);
  }

  /**
   * Quit current lesson
   */
  quitLesson(): void {
    if (this.currentLesson) {
      EventBus.emit('lesson:quit', { lessonId: this.currentLesson.id });
    }
    this.currentLesson = null;
    this.currentExerciseIndex = 0;
    this.exerciseResults = [];
  }

  /**
   * Get lesson progress percentage
   */
  getLessonProgress(): number {
    if (!this.currentLesson || this.currentLesson.exercises.length === 0) {
      return 0;
    }
    return Math.round((this.currentExerciseIndex / this.currentLesson.exercises.length) * 100);
  }

  /**
   * Check if lesson is completed by user
   */
  isLessonCompleted(lessonId: string): boolean {
    const state = Store.getState();
    return state.user.statistics.completedLessons.has(lessonId);
  }

  /**
   * Get user's completed lessons count
   */
  getCompletedLessonsCount(): number {
    const state = Store.getState();
    return state.user.statistics.completedLessons.size;
  }

  /**
   * Get lesson difficulty label
   */
  getLessonDifficultyLabel(level: number): string {
    if (level <= 2) {
      return 'Anfänger';
    }
    if (level <= 4) {
      return 'Fortgeschritten';
    }
    return 'Experte';
  }

  /**
   * Get lessons filtered by user level
   */
  getLessonsForUserLevel(): Lesson[] {
    const state = Store.getState();
    const userLevel = state.user.level;
    return ALL_LESSONS.filter(lesson => lesson.level <= userLevel + 1);
  }
}

// Singleton instance
export const LessonService = new LessonServiceImpl();
