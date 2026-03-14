/**
 * Domain Models - Central Export
 */

// Achievements
export {
  ACHIEVEMENTS,
  calculateLevel as calculateAchievementLevel,
  getAchievementById,
  getLevelProgress as getAchievementLevelProgress,
  getAchievementsByCategory,
  getCategoryLabel,
  getRarityColor,
  getRarityLabel,
  getXPForNextLevel,
  LEVEL_XP_THRESHOLDS,
} from './Achievement';
export type {
  Achievement,
  AchievementCategory,
  AchievementRarity,
  AchievementRequirement,
  UserAchievement,
} from './Achievement';

// Keyboard
export { findKeyByChar, getPrintableKeys, QWERTZ_LAYOUT, requiresShift } from './KeyboardLayout';
export type { KeyboardLayout, KeyDefinition } from './KeyboardLayout';

// Lessons
export type {
  Exercise,
  Lesson,
  LessonCategory,
  ProgrammingLesson,
  ShortcutDefinition,
  ShortcutLesson,
} from './Lesson';

// Typing Session
export {
  calculateAccuracy,
  calculateRawWPM,
  calculateWPM,
  createTypingSession,
  getSessionStats,
} from './TypingSession';
export type { Keystroke, SessionStats, TypingError, TypingSession } from './TypingSession';

// Statistics
export {
  calculateStreak,
  createEmptyStatistics,
  formatPracticeTime,
  getProgressPercentage,
  getSlowestKeys,
  getWeakestKeys,
} from './Statistics';
export type { DailyStats, KeyStatistics, UserStatistics } from './Statistics';

// User
export { calculateLevel, createUser, DEFAULT_SETTINGS, getLevelProgress, xpForLevel } from './User';
export type { ExerciseProgress, LessonProgress, User, UserSettings } from './User';
