/**
 * User statistics for a specific key
 */
export interface KeyStatistics {
  key: string;
  totalAttempts: number;
  correctAttempts: number;
  averageTime: number;
  errorRate: number;
}

/**
 * Daily practice data
 */
export interface DailyStats {
  date: string; // ISO date string (YYYY-MM-DD)
  practiceTimeMs: number;
  sessionsCount: number;
  totalKeystrokes: number;
  averageWPM: number;
  averageAccuracy: number;
}

/**
 * Overall user statistics
 */
export interface UserStatistics {
  // Totals
  totalSessions: number;
  totalPracticeTimeMs: number;
  totalKeystrokes: number;
  totalLessonsCompleted: number;

  // Performance metrics
  averageWPM: number;
  peakWPM: number;
  averageAccuracy: number;
  currentStreak: number;
  longestStreak: number;

  // Detailed stats
  keyStats: Map<string, KeyStatistics>;
  dailyStats: DailyStats[];
  wpmHistory: { timestamp: number; wpm: number }[];
  accuracyHistory: { timestamp: number; accuracy: number }[];

  // Progress tracking
  completedLessons: Set<string>;
  completedExercises: Set<string>;

  // Last session
  lastPracticeDate?: string;
  lastSessionId?: string;
}

/**
 * Create empty user statistics
 */
export function createEmptyStatistics(): UserStatistics {
  return {
    totalSessions: 0,
    totalPracticeTimeMs: 0,
    totalKeystrokes: 0,
    totalLessonsCompleted: 0,
    averageWPM: 0,
    peakWPM: 0,
    averageAccuracy: 0,
    currentStreak: 0,
    longestStreak: 0,
    keyStats: new Map(),
    dailyStats: [],
    wpmHistory: [],
    accuracyHistory: [],
    completedLessons: new Set(),
    completedExercises: new Set(),
  };
}

/**
 * Get the weakest keys based on error rate
 */
export function getWeakestKeys(stats: UserStatistics, count: number = 5): KeyStatistics[] {
  const keyStatsArray = Array.from(stats.keyStats.values());
  return keyStatsArray
    .filter(k => k.totalAttempts >= 10) // Minimum attempts threshold
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, count);
}

/**
 * Get the slowest keys based on average time
 */
export function getSlowestKeys(stats: UserStatistics, count: number = 5): KeyStatistics[] {
  const keyStatsArray = Array.from(stats.keyStats.values());
  return keyStatsArray
    .filter(k => k.totalAttempts >= 10)
    .sort((a, b) => b.averageTime - a.averageTime)
    .slice(0, count);
}

/**
 * Calculate streak based on daily stats
 */
export function calculateStreak(dailyStats: DailyStats[]): number {
  if (dailyStats.length === 0) {
    return 0;
  }

  const sortedStats = [...dailyStats].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // Check if practiced today or yesterday
  if (sortedStats[0].date !== today && sortedStats[0].date !== yesterday) {
    return 0;
  }

  let streak = 1;
  for (let i = 1; i < sortedStats.length; i++) {
    const currentDate = new Date(sortedStats[i - 1].date);
    const prevDate = new Date(sortedStats[i].date);
    const diffDays = (currentDate.getTime() - prevDate.getTime()) / 86400000;

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Format practice time for display
 */
export function formatPracticeTime(ms: number): string {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

/**
 * Get progress percentage for a given metric
 */
export function getProgressPercentage(current: number, target: number, max: number = 100): number {
  if (target === 0) {
    return 0;
  }
  const percentage = (current / target) * 100;
  return Math.min(Math.round(percentage), max);
}
