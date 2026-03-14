import { UserStatistics, createEmptyStatistics } from './Statistics';

/**
 * User settings/preferences
 */
export interface UserSettings {
  // Display
  theme: 'dark' | 'light';
  keyboardLayout: string;
  showFingerHints: boolean;
  showKeyboardHints: boolean;

  // Sound
  soundEnabled: boolean;
  soundVolume: number;
  keystrokeSound: boolean;
  errorSound: boolean;
  successSound: boolean;

  // Practice
  targetWPM: number;
  targetAccuracy: number;
  autoAdvance: boolean;
  showLiveWPM: boolean;
  showLiveAccuracy: boolean;
}

/**
 * Lesson progress for a user
 */
export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  bestWPM: number;
  bestAccuracy: number;
  attempts: number;
  lastAttempt?: string;
  exerciseProgress: Map<string, ExerciseProgress>;
}

/**
 * Exercise progress
 */
export interface ExerciseProgress {
  exerciseId: string;
  completed: boolean;
  bestWPM: number;
  bestAccuracy: number;
  attempts: number;
}

/**
 * User profile
 */
export interface User {
  id: string;
  createdAt: string;
  settings: UserSettings;
  statistics: UserStatistics;
  lessonProgress: Map<string, LessonProgress>;
  achievements: string[]; // Achievement IDs
  level: number;
  xp: number;
}

/**
 * Default user settings
 */
export const DEFAULT_SETTINGS: UserSettings = {
  theme: 'dark',
  keyboardLayout: 'qwertz-de',
  showFingerHints: true,
  showKeyboardHints: true,
  soundEnabled: true,
  soundVolume: 0.5,
  keystrokeSound: false,
  errorSound: true,
  successSound: true,
  targetWPM: 40,
  targetAccuracy: 95,
  autoAdvance: true,
  showLiveWPM: true,
  showLiveAccuracy: true,
};

/**
 * Create a new user
 */
export function createUser(): User {
  return {
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    settings: { ...DEFAULT_SETTINGS },
    statistics: createEmptyStatistics(),
    lessonProgress: new Map(),
    achievements: [],
    level: 1,
    xp: 0,
  };
}

/**
 * XP required for each level
 */
export function xpForLevel(level: number): number {
  // Exponential growth: 100, 250, 500, 850, 1300, ...
  return Math.floor(100 * Math.pow(1.5, level - 1));
}

/**
 * Calculate level from XP
 */
export function calculateLevel(xp: number): number {
  let level = 1;
  let totalXp = 0;

  while (totalXp + xpForLevel(level) <= xp) {
    totalXp += xpForLevel(level);
    level++;
  }

  return level;
}

/**
 * Get XP progress to next level (0-100%)
 */
export function getLevelProgress(xp: number): number {
  const currentLevel = calculateLevel(xp);
  let xpForCurrentLevel = 0;

  for (let i = 1; i < currentLevel; i++) {
    xpForCurrentLevel += xpForLevel(i);
  }

  const xpInCurrentLevel = xp - xpForCurrentLevel;
  const xpNeeded = xpForLevel(currentLevel);

  return Math.round((xpInCurrentLevel / xpNeeded) * 100);
}
