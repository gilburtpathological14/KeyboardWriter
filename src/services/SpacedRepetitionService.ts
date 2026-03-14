/**
 * Spaced Repetition Service
 * Implements SM-2 algorithm for optimal learning intervals
 */

/**
 * Quality ratings for SM-2 algorithm
 * 0 - Complete blackout, no recall
 * 1 - Incorrect response, but upon seeing correct answer, remembered
 * 2 - Incorrect response, but correct answer seemed easy to recall
 * 3 - Correct response with serious difficulty
 * 4 - Correct response after hesitation
 * 5 - Perfect response
 */
export type QualityRating = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Mastery level based on ease factor and repetitions
 */
export type MasteryLevel = 'new' | 'learning' | 'reviewing' | 'mastered';

/**
 * SRS item data stored for each command/shortcut
 */
export interface SRSItemData {
  itemId: string;
  itemType: 'command' | 'shortcut';
  collectionId: string;

  // SM-2 algorithm parameters
  easeFactor: number; // Starting at 2.5
  interval: number; // Days until next review
  repetitions: number; // Number of successful reviews

  // Tracking
  nextReviewDate: string; // ISO date string
  lastReviewDate: string | null;
  totalReviews: number;
  correctReviews: number;

  // Performance
  averageQuality: number;
  streak: number; // Consecutive correct answers
}

/**
 * Review session result
 */
export interface ReviewResult {
  itemId: string;
  quality: QualityRating;
  responseTime: number; // milliseconds
  wasCorrect: boolean;
}

/**
 * Daily review statistics
 */
export interface DailyReviewStats {
  date: string;
  totalReviews: number;
  correctReviews: number;
  newItemsLearned: number;
  averageQuality: number;
  timeSpent: number; // milliseconds
}

// Storage keys
const STORAGE_KEY = 'srs_data';
const STATS_KEY = 'srs_stats';

/**
 * SpacedRepetitionService class
 */
export class SpacedRepetitionService {
  private readonly items: Map<string, SRSItemData> = new Map();
  private readonly dailyStats: Map<string, DailyReviewStats> = new Map();

  constructor() {
    this.loadFromStorage();
  }

  /**
   * Load SRS data from storage
   */
  private loadFromStorage(): void {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data) as SRSItemData[];
        parsed.forEach(item => {
          this.items.set(item.itemId, item);
        });
      }

      const statsData = localStorage.getItem(STATS_KEY);
      if (statsData) {
        const parsedStats = JSON.parse(statsData) as DailyReviewStats[];
        parsedStats.forEach(stat => {
          this.dailyStats.set(stat.date, stat);
        });
      }
    } catch (error) {
      console.error('Error loading SRS data:', error);
    }
  }

  /**
   * Save SRS data to storage
   */
  private saveToStorage(): void {
    try {
      const itemsArray = Array.from(this.items.values());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsArray));

      const statsArray = Array.from(this.dailyStats.values());
      localStorage.setItem(STATS_KEY, JSON.stringify(statsArray));
    } catch (error) {
      console.error('Error saving SRS data:', error);
    }
  }

  /**
   * Get or create SRS data for an item
   */
  getItemData(itemId: string, itemType: 'command' | 'shortcut', collectionId: string): SRSItemData {
    const existing = this.items.get(itemId);
    if (existing) {
      return existing;
    }

    // Create new item with default values
    const newItem: SRSItemData = {
      itemId,
      itemType,
      collectionId,
      easeFactor: 2.5,
      interval: 0,
      repetitions: 0,
      nextReviewDate: new Date().toISOString().split('T')[0],
      lastReviewDate: null,
      totalReviews: 0,
      correctReviews: 0,
      averageQuality: 0,
      streak: 0,
    };

    this.items.set(itemId, newItem);
    this.saveToStorage();
    return newItem;
  }

  /**
   * Process a review result using SM-2 algorithm
   */
  processReview(result: ReviewResult): SRSItemData {
    const item = this.items.get(result.itemId);
    if (!item) {
      throw new Error(`Item not found: ${result.itemId}`);
    }

    const { quality, wasCorrect } = result;
    const today = new Date().toISOString().split('T')[0];

    // Update review counts
    item.totalReviews++;
    if (wasCorrect) {
      item.correctReviews++;
      item.streak++;
    } else {
      item.streak = 0;
    }

    // Update average quality
    item.averageQuality =
      (item.averageQuality * (item.totalReviews - 1) + quality) / item.totalReviews;

    // Apply SM-2 algorithm
    if (quality >= 3) {
      // Correct response
      if (item.repetitions === 0) {
        item.interval = 1;
      } else if (item.repetitions === 1) {
        item.interval = 6;
      } else {
        item.interval = Math.round(item.interval * item.easeFactor);
      }
      item.repetitions++;
    } else {
      // Incorrect response - reset
      item.repetitions = 0;
      item.interval = 1;
    }

    // Update ease factor
    item.easeFactor = Math.max(
      1.3,
      item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    // Calculate next review date
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + item.interval);
    item.nextReviewDate = nextDate.toISOString().split('T')[0];
    item.lastReviewDate = today;

    // Update daily stats
    this.updateDailyStats(result, item.repetitions === 1);

    // Save changes
    this.items.set(result.itemId, item);
    this.saveToStorage();

    return item;
  }

  /**
   * Update daily statistics
   */
  private updateDailyStats(result: ReviewResult, isNewItem: boolean): void {
    const today = new Date().toISOString().split('T')[0];
    let stats = this.dailyStats.get(today);

    if (!stats) {
      stats = {
        date: today,
        totalReviews: 0,
        correctReviews: 0,
        newItemsLearned: 0,
        averageQuality: 0,
        timeSpent: 0,
      };
    }

    stats.totalReviews++;
    if (result.wasCorrect) {
      stats.correctReviews++;
    }
    if (isNewItem) {
      stats.newItemsLearned++;
    }
    stats.averageQuality =
      (stats.averageQuality * (stats.totalReviews - 1) + result.quality) / stats.totalReviews;
    stats.timeSpent += result.responseTime;

    this.dailyStats.set(today, stats);
  }

  /**
   * Get items due for review
   */
  getDueItems(collectionId?: string): SRSItemData[] {
    const today = new Date().toISOString().split('T')[0];
    const dueItems: SRSItemData[] = [];

    this.items.forEach(item => {
      if (collectionId && item.collectionId !== collectionId) {
        return;
      }
      if (item.nextReviewDate <= today) {
        dueItems.push(item);
      }
    });

    // Sort by priority: overdue items first, then by ease factor (harder items first)
    return dueItems.sort((a, b) => {
      const aOverdue = this.getDaysOverdue(a);
      const bOverdue = this.getDaysOverdue(b);
      if (aOverdue !== bOverdue) {
        return bOverdue - aOverdue; // More overdue first
      }
      return a.easeFactor - b.easeFactor; // Harder items first
    });
  }

  /**
   * Get days overdue for an item
   */
  private getDaysOverdue(item: SRSItemData): number {
    const today = new Date();
    const reviewDate = new Date(item.nextReviewDate);
    const diffTime = today.getTime() - reviewDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Get new items (never reviewed)
   */
  getNewItems(collectionId?: string, limit: number = 10): SRSItemData[] {
    const newItems: SRSItemData[] = [];

    this.items.forEach(item => {
      if (collectionId && item.collectionId !== collectionId) {
        return;
      }
      if (item.repetitions === 0) {
        newItems.push(item);
      }
    });

    return newItems.slice(0, limit);
  }

  /**
   * Get mastery level for an item
   */
  getMasteryLevel(item: SRSItemData): MasteryLevel {
    if (item.repetitions === 0) {
      return 'new';
    }
    if (item.repetitions < 3) {
      return 'learning';
    }
    if (item.interval >= 21 && item.easeFactor >= 2.3) {
      return 'mastered';
    }
    return 'reviewing';
  }

  /**
   * Get mastery percentage for a collection
   */
  getCollectionMastery(collectionId: string): {
    total: number;
    new: number;
    learning: number;
    reviewing: number;
    mastered: number;
    percentage: number;
  } {
    const stats = { total: 0, new: 0, learning: 0, reviewing: 0, mastered: 0, percentage: 0 };

    this.items.forEach(item => {
      if (item.collectionId !== collectionId) {
        return;
      }
      stats.total++;
      const level = this.getMasteryLevel(item);
      stats[level]++;
    });

    if (stats.total > 0) {
      // Weight mastery: mastered = 100%, reviewing = 75%, learning = 50%, new = 0%
      stats.percentage = Math.round(
        (stats.mastered * 100 + stats.reviewing * 75 + stats.learning * 50) / stats.total
      );
    }

    return stats;
  }

  /**
   * Get all items for a collection
   */
  getCollectionItems(collectionId: string): SRSItemData[] {
    const items: SRSItemData[] = [];
    this.items.forEach(item => {
      if (item.collectionId === collectionId) {
        items.push(item);
      }
    });
    return items;
  }

  /**
   * Initialize items for a collection (register all commands/shortcuts)
   */
  initializeCollection(
    collectionId: string,
    itemIds: string[],
    itemType: 'command' | 'shortcut'
  ): void {
    itemIds.forEach(itemId => {
      this.getItemData(itemId, itemType, collectionId);
    });
    this.saveToStorage();
  }

  /**
   * Get review statistics for today
   */
  getTodayStats(): DailyReviewStats | null {
    const today = new Date().toISOString().split('T')[0];
    return this.dailyStats.get(today) || null;
  }

  /**
   * Get review statistics for the past N days
   */
  getRecentStats(days: number = 7): DailyReviewStats[] {
    const stats: DailyReviewStats[] = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayStat = this.dailyStats.get(dateStr);
      if (dayStat) {
        stats.push(dayStat);
      }
    }

    return stats.reverse();
  }

  /**
   * Get total statistics
   */
  getTotalStats(): {
    totalItems: number;
    totalReviews: number;
    totalCorrect: number;
    averageEaseFactor: number;
    longestStreak: number;
    masteredItems: number;
  } {
    let totalItems = 0;
    let totalReviews = 0;
    let totalCorrect = 0;
    let totalEaseFactor = 0;
    let longestStreak = 0;
    let masteredItems = 0;

    this.items.forEach(item => {
      totalItems++;
      totalReviews += item.totalReviews;
      totalCorrect += item.correctReviews;
      totalEaseFactor += item.easeFactor;
      if (item.streak > longestStreak) {
        longestStreak = item.streak;
      }
      if (this.getMasteryLevel(item) === 'mastered') {
        masteredItems++;
      }
    });

    return {
      totalItems,
      totalReviews,
      totalCorrect,
      averageEaseFactor: totalItems > 0 ? totalEaseFactor / totalItems : 2.5,
      longestStreak,
      masteredItems,
    };
  }

  /**
   * Generate a review queue with optimal ordering
   */
  generateReviewQueue(
    collectionId?: string,
    maxItems: number = 20,
    includeNew: boolean = true
  ): SRSItemData[] {
    const queue: SRSItemData[] = [];

    // First, add due items
    const dueItems = this.getDueItems(collectionId);
    queue.push(...dueItems.slice(0, maxItems));

    // If we have room and includeNew is true, add some new items
    if (includeNew && queue.length < maxItems) {
      const newItems = this.getNewItems(collectionId, maxItems - queue.length);
      queue.push(...newItems);
    }

    return queue;
  }

  /**
   * Get recommended daily goal based on current progress
   */
  getDailyGoal(): {
    newItems: number;
    reviewItems: number;
    totalMinutes: number;
  } {
    const stats = this.getTotalStats();
    const dueCount = this.getDueItems().length;

    // Base recommendations
    let newItems = 10;
    const reviewItems = dueCount;

    // Adjust based on performance
    if (stats.totalItems > 0) {
      const masteryRate = stats.masteredItems / stats.totalItems;
      if (masteryRate < 0.2) {
        // Focus on reviewing, reduce new items
        newItems = 5;
      } else if (masteryRate > 0.6) {
        // Can handle more new items
        newItems = 15;
      }
    }

    // Estimate time (average 30 seconds per item)
    const totalMinutes = Math.round((newItems + reviewItems) * 0.5);

    return { newItems, reviewItems, totalMinutes };
  }

  /**
   * Reset all SRS data (for testing)
   */
  resetAll(): void {
    this.items.clear();
    this.dailyStats.clear();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STATS_KEY);
  }

  /**
   * Export SRS data
   */
  exportData(): { items: SRSItemData[]; stats: DailyReviewStats[] } {
    return {
      items: Array.from(this.items.values()),
      stats: Array.from(this.dailyStats.values()),
    };
  }

  /**
   * Import SRS data
   */
  importData(data: { items: SRSItemData[]; stats: DailyReviewStats[] }): void {
    this.items.clear();
    this.dailyStats.clear();

    data.items.forEach(item => {
      this.items.set(item.itemId, item);
    });

    data.stats.forEach(stat => {
      this.dailyStats.set(stat.date, stat);
    });

    this.saveToStorage();
  }
}

// Singleton instance
export const srsService = new SpacedRepetitionService();
