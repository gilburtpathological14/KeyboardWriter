/**
 * SRS Review Page Controller
 * Spaced Repetition System review interface
 */

import { EventBus } from '../core';
import {
  ALL_COMMAND_COLLECTIONS,
  ALL_SHORTCUT_COLLECTIONS,
  CommandCollection,
  ShortcutCollection,
} from '../data/shortcuts';
import {
  MasteryLevel,
  QualityRating,
  SRSItemData,
  srsService,
} from '../services/SpacedRepetitionService';

type CollectionType = 'command' | 'shortcut';

interface ReviewItem {
  id: string;
  type: CollectionType;
  collectionId: string;
  question: string;
  answer: string;
  hint?: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  srsData: SRSItemData;
}

export class SRSReviewPage {
  private viewMode: 'overview' | 'review' | 'stats' = 'overview';
  private reviewQueue: ReviewItem[] = [];
  private currentReviewIndex: number = 0;
  private showAnswer: boolean = false;
  private sessionStartTime: Date | null = null;
  private sessionCorrect: number = 0;
  private sessionIncorrect: number = 0;
  private taskStartTime: number = 0;
  private selectedCollectionId: string | null = null;

  constructor() {
    // Initialize SRS for all collections
    this.initializeAllCollections();
  }

  /**
   * Initialize SRS data for all collections
   */
  private initializeAllCollections(): void {
    ALL_COMMAND_COLLECTIONS.forEach(col => {
      const itemIds = col.commands.map(cmd => cmd.id);
      srsService.initializeCollection(col.id, itemIds, 'command');
    });

    ALL_SHORTCUT_COLLECTIONS.forEach(col => {
      const itemIds = col.shortcuts.map(sc => sc.id);
      srsService.initializeCollection(col.id, itemIds, 'shortcut');
    });
  }

  /**
   * Render the page
   */
  render(): string {
    return `
      <div class="typing-container">
        <div class="srs-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6);">
          <h1> Spaced Repetition</h1>
          <div class="view-mode-toggle" style="display: flex; gap: var(--space-2);">
            <button id="mode-overview" class="btn ${this.viewMode === 'overview' ? 'btn-primary' : 'btn-secondary'}">
               Übersicht
            </button>
            <button id="mode-review" class="btn ${this.viewMode === 'review' ? 'btn-primary' : 'btn-secondary'}">
               Review
            </button>
            <button id="mode-stats" class="btn ${this.viewMode === 'stats' ? 'btn-primary' : 'btn-secondary'}">
               Statistiken
            </button>
          </div>
        </div>

        ${this.viewMode === 'overview' ? this.renderOverview() : ''}
        ${this.viewMode === 'review' ? this.renderReviewMode() : ''}
        ${this.viewMode === 'stats' ? this.renderStats() : ''}
      </div>
    `;
  }

  /**
   * Render overview with all collections and mastery levels
   */
  private renderOverview(): string {
    const dailyGoal = srsService.getDailyGoal();
    const todayStats = srsService.getTodayStats();
    const totalStats = srsService.getTotalStats();

    return `
      <div class="srs-overview">
        <!-- Daily Goal Card -->
        <div class="card" style="padding: var(--space-6); margin-bottom: var(--space-6); background: linear-gradient(135deg, var(--accent-primary)20, var(--accent-secondary)20);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h2 style="margin-bottom: var(--space-2);"> Tagesziel</h2>
              <p style="color: var(--text-muted);">
                ${dailyGoal.reviewItems} zu wiederholen, ${dailyGoal.newItems} neue Items
              </p>
              <p style="font-size: 12px; color: var(--text-muted); margin-top: var(--space-1);">
                Geschätzte Zeit: ~${dailyGoal.totalMinutes} Minuten
              </p>
            </div>
            <button class="btn btn-primary btn-lg" id="btn-start-daily-review">
               Review starten
            </button>
          </div>
          ${
            todayStats
              ? `
            <div style="margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid var(--border-primary);">
              <div style="display: flex; gap: var(--space-6);">
                <div>
                  <span style="font-size: 24px; font-weight: bold; color: var(--accent-success);">${todayStats.totalReviews}</span>
                  <span style="color: var(--text-muted); margin-left: var(--space-2);">Reviews heute</span>
                </div>
                <div>
                  <span style="font-size: 24px; font-weight: bold; color: var(--accent-primary);">${todayStats.newItemsLearned}</span>
                  <span style="color: var(--text-muted); margin-left: var(--space-2);">Neu gelernt</span>
                </div>
                <div>
                  <span style="font-size: 24px; font-weight: bold; color: var(--text-primary);">${todayStats.totalReviews > 0 ? Math.round((todayStats.correctReviews / todayStats.totalReviews) * 100) : 0}%</span>
                  <span style="color: var(--text-muted); margin-left: var(--space-2);">Genauigkeit</span>
                </div>
              </div>
            </div>
          `
              : ''
          }
        </div>

        <!-- Total Stats -->
        <div class="stats-panel" style="margin-bottom: var(--space-6);">
          <div class="stat-card">
            <span class="stat-card-value">${totalStats.totalItems}</span>
            <span class="stat-card-label">Gesamt Items</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-value" style="color: var(--accent-success);">${totalStats.masteredItems}</span>
            <span class="stat-card-label">Gemeistert</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-value">${totalStats.totalReviews}</span>
            <span class="stat-card-label">Total Reviews</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-value"> ${totalStats.longestStreak}</span>
            <span class="stat-card-label">Längste Serie</span>
          </div>
        </div>

        <!-- Command Collections -->
        <h3 style="margin-bottom: var(--space-4); color: var(--text-secondary);"> Terminal-Befehle</h3>
        <div class="collections-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
          ${ALL_COMMAND_COLLECTIONS.map(col => this.renderCollectionCard(col, 'command')).join('')}
        </div>

        <!-- Shortcut Collections -->
        <h3 style="margin-bottom: var(--space-4); color: var(--text-secondary);"> Keyboard Shortcuts</h3>
        <div class="collections-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-4);">
          ${ALL_SHORTCUT_COLLECTIONS.map(col => this.renderCollectionCard(col, 'shortcut')).join('')}
        </div>
      </div>
    `;
  }

  /**
   * Render collection card with mastery progress
   */
  private renderCollectionCard(
    collection: CommandCollection | ShortcutCollection,
    type: CollectionType
  ): string {
    const mastery = srsService.getCollectionMastery(collection.id);
    const dueCount = srsService.getDueItems(collection.id).length;

    const masteryColors: Record<MasteryLevel, string> = {
      new: 'var(--text-muted)',
      learning: 'var(--accent-warning)',
      reviewing: 'var(--accent-primary)',
      mastered: 'var(--accent-success)',
    };

    return `
      <div class="collection-card card" style="padding: var(--space-4); cursor: pointer;" data-collection="${collection.id}" data-type="${type}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-3);">
          <div>
            <span style="font-size: 24px;">${collection.icon}</span>
            <h3 style="margin-top: var(--space-1);">${collection.name}</h3>
          </div>
          ${
            dueCount > 0
              ? `
            <span style="
              background: var(--accent-error);
              color: white;
              padding: 2px 8px;
              border-radius: 12px;
              font-size: 12px;
              font-weight: bold;
            ">${dueCount} fällig</span>
          `
              : ''
          }
        </div>

        <!-- Mastery Bar -->
        <div style="margin-bottom: var(--space-3);">
          <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-1);">
            <span style="font-size: 12px; color: var(--text-muted);">Fortschritt</span>
            <span style="font-size: 12px; font-weight: bold; color: var(--accent-success);">${mastery.percentage}%</span>
          </div>
          <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden; display: flex;">
            <div style="width: ${(mastery.mastered / Math.max(mastery.total, 1)) * 100}%; background: var(--accent-success);"></div>
            <div style="width: ${(mastery.reviewing / Math.max(mastery.total, 1)) * 100}%; background: var(--accent-primary);"></div>
            <div style="width: ${(mastery.learning / Math.max(mastery.total, 1)) * 100}%; background: var(--accent-warning);"></div>
          </div>
        </div>

        <!-- Stats -->
        <div style="display: flex; gap: var(--space-4); font-size: 12px;">
          <div style="display: flex; align-items: center; gap: 4px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${masteryColors.new};"></span>
            <span style="color: var(--text-muted);">Neu: ${mastery.new}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 4px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${masteryColors.learning};"></span>
            <span style="color: var(--text-muted);">Lernen: ${mastery.learning}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 4px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${masteryColors.mastered};"></span>
            <span style="color: var(--text-muted);">Gemeistert: ${mastery.mastered}</span>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render review mode
   */
  private renderReviewMode(): string {
    if (this.reviewQueue.length === 0) {
      return this.renderReviewSetup();
    }

    const currentItem = this.reviewQueue[this.currentReviewIndex];
    const progress = ((this.currentReviewIndex + 1) / this.reviewQueue.length) * 100;

    return `
      <div class="review-mode">
        <!-- Progress Stats -->
        <div class="stats-panel" style="margin-bottom: var(--space-6);">
          <div class="stat-card">
            <span class="stat-card-value">${this.currentReviewIndex + 1}/${this.reviewQueue.length}</span>
            <span class="stat-card-label">Karte</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-value" style="color: var(--accent-success);">${this.sessionCorrect}</span>
            <span class="stat-card-label">Richtig</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-value" style="color: var(--accent-error);">${this.sessionIncorrect}</span>
            <span class="stat-card-label">Wiederholen</span>
          </div>
          <div class="stat-card">
            <span class="stat-card-value">${this.getMasteryLabel(srsService.getMasteryLevel(currentItem.srsData))}</span>
            <span class="stat-card-label">Level</span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar" style="margin-bottom: var(--space-6);">
          <div class="progress-bar-fill" style="width: ${progress}%;"></div>
        </div>

        <!-- Flashcard -->
        <div class="flashcard card" style="padding: var(--space-8); text-align: center; min-height: 300px; display: flex; flex-direction: column; justify-content: center;">
          <div style="margin-bottom: var(--space-4);">
            <span style="
              font-size: 11px;
              padding: 4px 8px;
              background: var(--bg-tertiary);
              border-radius: 4px;
              color: var(--text-muted);
            ">${currentItem.category}</span>
          </div>

          <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--space-6);">
            ${currentItem.question}
          </h2>

          ${
            this.showAnswer
              ? `
            <div style="margin-top: var(--space-4); padding-top: var(--space-4); border-top: 2px solid var(--accent-success);">
              <code style="
                display: inline-block;
                padding: var(--space-3) var(--space-4);
                background: var(--bg-tertiary);
                border: 1px solid var(--accent-success);
                border-radius: 8px;
                font-family: var(--font-mono);
                font-size: 18px;
                color: var(--accent-success);
              ">${currentItem.answer}</code>
            </div>
          `
              : `
            <button class="btn btn-primary btn-lg" id="btn-show-answer">
              Antwort zeigen
            </button>
          `
          }
        </div>

        ${
          this.showAnswer
            ? `
          <!-- Rating Buttons -->
          <div style="margin-top: var(--space-6);">
            <p style="text-align: center; color: var(--text-muted); margin-bottom: var(--space-4);">Wie gut konntest du dich erinnern?</p>
            <div style="display: flex; justify-content: center; gap: var(--space-3);">
              <button class="btn rating-btn" data-rating="0" style="background: var(--accent-error); color: white;">
                 Keine Ahnung
              </button>
              <button class="btn rating-btn" data-rating="2" style="background: var(--accent-warning); color: white;">
                 Schwer
              </button>
              <button class="btn rating-btn" data-rating="3" style="background: var(--accent-primary); color: white;">
                 Okay
              </button>
              <button class="btn rating-btn" data-rating="4" style="background: var(--accent-secondary); color: white;">
                 Gut
              </button>
              <button class="btn rating-btn" data-rating="5" style="background: var(--accent-success); color: white;">
                 Perfekt
              </button>
            </div>
          </div>
        `
            : ''
        }

        <!-- Controls -->
        <div style="text-align: center; margin-top: var(--space-6);">
          <button id="btn-end-review" class="btn btn-ghost">
             Review beenden
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Render review setup
   */
  private renderReviewSetup(): string {
    const dueTotal = srsService.getDueItems().length;

    return `
      <div class="review-setup card" style="text-align: center; padding: var(--space-8);">
        <h2 style="margin-bottom: var(--space-4);"> Review Session</h2>
        <p style="color: var(--text-muted); margin-bottom: var(--space-6);">
          ${
            dueTotal > 0
              ? `Du hast ${dueTotal} Items zur Wiederholung!`
              : 'Keine Items zur Wiederholung fällig. Starte mit neuen Items!'
          }
        </p>

        <div style="display: flex; flex-wrap: wrap; gap: var(--space-3); justify-content: center; margin-bottom: var(--space-6);">
          <button class="btn btn-primary btn-lg" id="btn-start-due" ${dueTotal === 0 ? 'disabled' : ''}>
             Fällige Items (${dueTotal})
          </button>
          <button class="btn btn-secondary btn-lg" id="btn-start-new">
             Neue Items lernen
          </button>
          <button class="btn btn-secondary btn-lg" id="btn-start-all">
             Gemischte Session
          </button>
        </div>

        ${
          this.selectedCollectionId
            ? `
          <p style="font-size: 12px; color: var(--text-muted);">
            Ausgewählte Kollektion wird verwendet
          </p>
        `
            : ''
        }
      </div>
    `;
  }

  /**
   * Render statistics
   */
  private renderStats(): string {
    const recentStats = srsService.getRecentStats(7);
    const totalStats = srsService.getTotalStats();

    return `
      <div class="stats-view">
        <!-- Total Progress -->
        <div class="card" style="padding: var(--space-6); margin-bottom: var(--space-6);">
          <h3 style="margin-bottom: var(--space-4);"> Gesamtfortschritt</h3>
          <div class="stats-panel">
            <div class="stat-card">
              <span class="stat-card-value">${totalStats.totalReviews}</span>
              <span class="stat-card-label">Gesamt Reviews</span>
            </div>
            <div class="stat-card">
              <span class="stat-card-value">${totalStats.totalCorrect}</span>
              <span class="stat-card-label">Richtige Antworten</span>
            </div>
            <div class="stat-card">
              <span class="stat-card-value">${totalStats.totalReviews > 0 ? Math.round((totalStats.totalCorrect / totalStats.totalReviews) * 100) : 0}%</span>
              <span class="stat-card-label">Genauigkeit</span>
            </div>
            <div class="stat-card">
              <span class="stat-card-value">${totalStats.masteredItems}/${totalStats.totalItems}</span>
              <span class="stat-card-label">Gemeistert</span>
            </div>
          </div>
        </div>

        <!-- Weekly Activity -->
        <div class="card" style="padding: var(--space-6);">
          <h3 style="margin-bottom: var(--space-4);"> Letzte 7 Tage</h3>
          ${
            recentStats.length > 0
              ? `
            <div style="display: flex; gap: var(--space-3); justify-content: space-between;">
              ${recentStats
                .map(stat => {
                  const date = new Date(stat.date);
                  const dayName = date.toLocaleDateString('de-DE', { weekday: 'short' });
                  const maxReviews = Math.max(...recentStats.map(s => s.totalReviews), 1);
                  const height = (stat.totalReviews / maxReviews) * 100;
                  return `
                  <div style="flex: 1; text-align: center;">
                    <div style="
                      height: 100px;
                      display: flex;
                      align-items: flex-end;
                      justify-content: center;
                      margin-bottom: var(--space-2);
                    ">
                      <div style="
                        width: 100%;
                        height: ${height}%;
                        min-height: 4px;
                        background: var(--accent-primary);
                        border-radius: 4px 4px 0 0;
                      "></div>
                    </div>
                    <div style="font-size: 12px; color: var(--text-muted);">${dayName}</div>
                    <div style="font-size: 14px; font-weight: bold;">${stat.totalReviews}</div>
                  </div>
                `;
                })
                .join('')}
            </div>
          `
              : `
            <p style="color: var(--text-muted); text-align: center;">Noch keine Daten vorhanden. Starte deine erste Review Session!</p>
          `
          }
        </div>
      </div>
    `;
  }

  /**
   * Get mastery label
   */
  private getMasteryLabel(level: MasteryLevel): string {
    const labels: Record<MasteryLevel, string> = {
      new: ' Neu',
      learning: ' Lernen',
      reviewing: ' Review',
      mastered: ' Gemeistert',
    };
    return labels[level];
  }

  /**
   * Initialize the page
   */
  init(): void {
    this.setupEventListeners();
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    // View mode toggle
    document.getElementById('mode-overview')?.addEventListener('click', () => {
      this.viewMode = 'overview';
      this.rerender();
    });

    document.getElementById('mode-review')?.addEventListener('click', () => {
      this.viewMode = 'review';
      this.rerender();
    });

    document.getElementById('mode-stats')?.addEventListener('click', () => {
      this.viewMode = 'stats';
      this.rerender();
    });

    // Daily review button
    document.getElementById('btn-start-daily-review')?.addEventListener('click', () => {
      this.startReviewSession();
    });

    // Collection cards
    document.querySelectorAll('.collection-card').forEach(card => {
      card.addEventListener('click', e => {
        const collectionId = (e.currentTarget as HTMLElement).dataset.collection;
        const collectionType = (e.currentTarget as HTMLElement).dataset.type as CollectionType;
        if (collectionId) {
          this.selectedCollectionId = collectionId;
          this.startReviewSession(
            collectionId,
            collectionType === 'command' ? 'command' : 'shortcut'
          );
        }
      });
    });

    // Review setup buttons
    document.getElementById('btn-start-due')?.addEventListener('click', () => {
      this.startReviewSession(this.selectedCollectionId ?? undefined, undefined, false);
    });

    document.getElementById('btn-start-new')?.addEventListener('click', () => {
      this.startReviewSession(this.selectedCollectionId ?? undefined, undefined, true, true);
    });

    document.getElementById('btn-start-all')?.addEventListener('click', () => {
      this.startReviewSession(this.selectedCollectionId ?? undefined, undefined, true);
    });

    // Show answer
    document.getElementById('btn-show-answer')?.addEventListener('click', () => {
      this.showAnswer = true;
      this.rerender();
    });

    // Rating buttons
    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const rating = parseInt(
          (e.currentTarget as HTMLElement).dataset.rating ?? '3',
          10
        ) as QualityRating;
        this.submitRating(rating);
      });
    });

    // End review
    document.getElementById('btn-end-review')?.addEventListener('click', () => {
      this.endReviewSession();
    });
  }

  /**
   * Start review session
   */
  private startReviewSession(
    collectionId?: string,
    _type?: CollectionType,
    includeNew: boolean = true,
    newOnly: boolean = false
  ): void {
    this.viewMode = 'review';
    this.showAnswer = false;
    this.sessionStartTime = new Date();
    this.sessionCorrect = 0;
    this.sessionIncorrect = 0;
    this.currentReviewIndex = 0;

    // Build review queue
    this.reviewQueue = [];

    if (newOnly) {
      // Only new items
      const newItems = srsService.getNewItems(collectionId, 20);
      this.reviewQueue = newItems.map(item => this.srsItemToReviewItem(item));
    } else {
      // Get queue from SRS service
      const srsQueue = srsService.generateReviewQueue(collectionId, 30, includeNew);
      this.reviewQueue = srsQueue.map(item => this.srsItemToReviewItem(item));
    }

    // Shuffle the queue
    this.reviewQueue = this.reviewQueue.sort(() => Math.random() - 0.5);

    if (this.reviewQueue.length > 0) {
      this.taskStartTime = Date.now();
    }

    this.rerender();
  }

  /**
   * Convert SRS item to review item
   */
  private srsItemToReviewItem(srsItem: SRSItemData): ReviewItem {
    let question = '';
    let answer = '';
    let hint = '';
    let category = '';
    let difficulty: 'beginner' | 'intermediate' | 'advanced' = 'beginner';

    if (srsItem.itemType === 'command') {
      // Find command
      for (const col of ALL_COMMAND_COLLECTIONS) {
        const cmd = col.commands.find(c => c.id === srsItem.itemId);
        if (cmd) {
          question = cmd.description;
          answer = cmd.command;
          hint = cmd.example ?? '';
          category = cmd.category;
          difficulty = cmd.difficulty ?? 'beginner';
          break;
        }
      }
    } else {
      // Find shortcut
      for (const col of ALL_SHORTCUT_COLLECTIONS) {
        const sc = col.shortcuts.find(s => s.id === srsItem.itemId);
        if (sc) {
          question = sc.description;
          answer = sc.keys.join(' + ');
          category = sc.category;
          difficulty = sc.difficulty ?? 'beginner';
          break;
        }
      }
    }

    return {
      id: srsItem.itemId,
      type: srsItem.itemType,
      collectionId: srsItem.collectionId,
      question,
      answer,
      hint,
      category,
      difficulty,
      srsData: srsItem,
    };
  }

  /**
   * Submit rating and move to next
   */
  private submitRating(rating: QualityRating): void {
    const currentItem = this.reviewQueue[this.currentReviewIndex];
    const responseTime = Date.now() - this.taskStartTime;

    // Process the review
    srsService.processReview({
      itemId: currentItem.id,
      quality: rating,
      responseTime,
      wasCorrect: rating >= 3,
    });

    // Update session stats
    if (rating >= 3) {
      this.sessionCorrect++;
    } else {
      this.sessionIncorrect++;
    }

    // Move to next
    this.currentReviewIndex++;
    this.showAnswer = false;

    if (this.currentReviewIndex >= this.reviewQueue.length) {
      this.showSessionResults();
    } else {
      this.taskStartTime = Date.now();
      this.rerender();
    }
  }

  /**
   * Show session results
   */
  private showSessionResults(): void {
    const total = this.sessionCorrect + this.sessionIncorrect;
    const accuracy = total > 0 ? Math.round((this.sessionCorrect / total) * 100) : 0;
    const elapsed = this.sessionStartTime
      ? Math.round((Date.now() - this.sessionStartTime.getTime()) / 1000)
      : 0;
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    EventBus.emit('ui:toast', {
      message: ` Session beendet! ${this.sessionCorrect}/${total} richtig (${accuracy}%) in ${minutes}:${seconds.toString().padStart(2, '0')}`,
      type: 'success',
    });

    this.endReviewSession();
  }

  /**
   * End review session
   */
  private endReviewSession(): void {
    this.reviewQueue = [];
    this.currentReviewIndex = 0;
    this.showAnswer = false;
    this.sessionStartTime = null;
    this.viewMode = 'overview';
    this.selectedCollectionId = null;
    this.rerender();
  }

  /**
   * Rerender the page
   */
  private rerender(): void {
    const main = document.querySelector('.app-main');
    if (main) {
      main.innerHTML = this.render();
      this.init();
    }
  }

  /**
   * Destroy the page
   */
  destroy(): void {
    // Cleanup if needed
  }
}
