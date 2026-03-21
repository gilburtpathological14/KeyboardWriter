/**
 * Story Mode Page - Quest and Chapter progression UI
 */

import { EventBus, i18n } from '../core';
import type { Chapter, PlayerStats, Quest, StoryProgress } from '../domain/models/Quest';
import { QuestDifficulty } from '../domain/models/Quest';
import { SkillTreeService } from '../services/SkillTreeService';
import { storyModeService } from '../services/StoryModeService';

/**
 * Story Mode Page Class
 */
export class StoryModePage {
  private container: HTMLElement | null = null;

  /**
   * Render the page
   */
  render(): string {
    const playerStats = storyModeService.getPlayerStats();
    const storyProgress = storyModeService.getStoryProgress();
    const chapters = storyModeService.getChapters();
    const currentQuest = storyModeService.getCurrentQuest();
    const skillStats = SkillTreeService.getStatistics();

    return `
      <div class="page story-mode-page">
        <div class="story-mode-container">
          <!-- Player Stats Header -->
          <div class="player-stats-header">
            <div class="player-info">
              <div class="player-avatar">
                <div class="avatar-circle">
                  <span class="avatar-level">${playerStats.level}</span>
                </div>
              </div>
              <div class="player-details">
                <h2 class="player-title">${i18n.t('storyMode.title')}</h2>
                <div class="player-level">
                  Level ${playerStats.level}
                  <span class="xp-info">(${playerStats.xp} / ${playerStats.xpToNextLevel + playerStats.xp} XP)</span>
                </div>
                <div class="xp-bar">
                  <div class="xp-fill" style="width: ${this.calculateXpPercentage(playerStats)}%"></div>
                </div>
              </div>
            </div>
            <div class="player-resources">
              <div class="resource coins">
                <span class="resource-icon">$</span>
                <span class="resource-value">${playerStats.coins}</span>
              </div>
              <div class="resource skill-points">
                <span class="resource-icon">*</span>
                <span class="resource-value">${playerStats.skillPoints}</span>
              </div>
              <div class="resource streak">
                <span class="resource-icon">#</span>
                <span class="resource-value">${playerStats.currentStreak} ${i18n.t('storyMode.days')}</span>
              </div>
            </div>
          </div>

          <!-- Current Quest Card -->
          ${currentQuest ? this.renderCurrentQuestCard(currentQuest) : ''}

          <!-- Skill Tree Quick Access -->
          <div class="skill-tree-preview card">
            <div class="card-header">
              <h3>${i18n.t('storyMode.skillTree')}</h3>
              <button class="btn btn-secondary btn-sm" id="openSkillTreeBtn">
                ${i18n.t('storyMode.viewSkillTree')}
              </button>
            </div>
            <div class="skill-preview-stats">
              <div class="stat">
                <span class="stat-value">${skillStats.unlockedSkills}</span>
                <span class="stat-label">${i18n.t('storyMode.skillsUnlocked')}</span>
              </div>
              <div class="stat">
                <span class="stat-value">${playerStats.skillPoints}</span>
                <span class="stat-label">${i18n.t('storyMode.availablePoints')}</span>
              </div>
              <div class="stat">
                <span class="stat-value">${skillStats.categoriesStarted}/7</span>
                <span class="stat-label">${i18n.t('storyMode.categories')}</span>
              </div>
            </div>
          </div>

          <!-- Chapters -->
          <div class="chapters-section">
            <h3 class="section-title">${i18n.t('storyMode.chapters')}</h3>
            <div class="chapters-grid">
              ${chapters.map((chapter, index) => this.renderChapterCard(chapter, index, storyProgress)).join('')}
            </div>
          </div>

          <!-- Stats Overview -->
          <div class="stats-overview card">
            <h3>${i18n.t('storyMode.yourProgress')}</h3>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-value">${storyProgress.completedQuests.length}</span>
                <span class="stat-label">${i18n.t('storyMode.questsCompleted')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">${storyProgress.completedChapters.length}</span>
                <span class="stat-label">${i18n.t('storyMode.chaptersCompleted')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">${storyProgress.bossesDefeated.length}</span>
                <span class="stat-label">${i18n.t('storyMode.bossesDefeated')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">${playerStats.highestWpm}</span>
                <span class="stat-label">${i18n.t('storyMode.highestWpm')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">${Math.round(playerStats.averageAccuracy)}%</span>
                <span class="stat-label">${i18n.t('storyMode.avgAccuracy')}</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">${Math.round(playerStats.totalPracticeTime / 60)}h</span>
                <span class="stat-label">${i18n.t('storyMode.totalTime')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Initialize page event listeners
   */
  init(): void {
    this.container = document.querySelector('.story-mode-page');
    if (!this.container) {
      return;
    }

    this.setupEventListeners();
  }

  /**
   * Destroy and cleanup
   */
  destroy(): void {
    this.container = null;
  }

  private calculateXpPercentage(stats: PlayerStats): number {
    const totalForLevel = stats.xp + stats.xpToNextLevel;
    return totalForLevel > 0 ? (stats.xp / totalForLevel) * 100 : 0;
  }

  private renderCurrentQuestCard(quest: Quest): string {
    const lang = i18n.getLanguage();
    const title = lang === 'de' && quest.titleDe ? quest.titleDe : quest.title;
    const description =
      lang === 'de' && quest.descriptionDe ? quest.descriptionDe : quest.description;

    return `
      <div class="current-quest-card">
        <div class="quest-header">
          <div>
            <span class="quest-badge">${i18n.t('storyMode.currentQuest')}</span>
            <h3 class="quest-title">${title}</h3>
            <p class="quest-description">${description}</p>
          </div>
          <span class="difficulty-badge ${quest.difficulty}">${this.getDifficultyLabel(quest.difficulty)}</span>
        </div>
        <div class="quest-requirements">
          ${quest.requirements
            .map(
              req => `
            <div class="requirement">
              <span>${req.unit}: ${req.current} / ${req.target}</span>
              <div class="requirement-progress">
                <div class="requirement-fill" style="width: ${Math.min(100, (req.current / req.target) * 100)}%"></div>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="quest-rewards">
          <div class="reward">+${quest.rewards.xp} XP</div>
          <div class="reward">+${quest.rewards.coins} Coins</div>
          ${quest.rewards.skillPoints ? `<div class="reward">+${quest.rewards.skillPoints} Skill Points</div>` : ''}
        </div>
        <button class="start-quest-btn" data-quest-id="${quest.id}">
          ${i18n.t('storyMode.startQuest')}
        </button>
      </div>
    `;
  }

  private renderChapterCard(chapter: Chapter, index: number, progress: StoryProgress): string {
    const lang = i18n.getLanguage();
    const title = lang === 'de' && chapter.titleDe ? chapter.titleDe : chapter.title;
    const description =
      lang === 'de' && chapter.descriptionDe ? chapter.descriptionDe : chapter.description;

    const isCompleted = progress.completedChapters.includes(chapter.id);
    const isCurrent = progress.currentChapter === chapter.id;
    const isUnlocked = storyModeService.isChapterUnlocked(chapter);

    const completedQuests = chapter.quests.filter(q =>
      progress.completedQuests.includes(q.id)
    ).length;
    const progressPercent = (completedQuests / chapter.quests.length) * 100;

    const statusClass = isCompleted
      ? 'completed'
      : isCurrent
        ? 'current'
        : !isUnlocked
          ? 'locked'
          : '';

    return `
      <div class="chapter-card ${statusClass}" data-chapter-id="${chapter.id}">
        <div class="chapter-header">
          <div class="chapter-icon" style="background-color: ${chapter.color}">
            ${index + 1}
          </div>
          <div class="chapter-info">
            <h4>${title}</h4>
            <p>${description}</p>
          </div>
        </div>
        <div class="chapter-progress">
          <span>${completedQuests}/${chapter.quests.length}</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <span>${Math.round(progressPercent)}%</span>
        </div>
        <div class="chapter-quests">
          ${chapter.quests.map(quest => this.renderQuestItem(quest, progress)).join('')}
        </div>
      </div>
    `;
  }

  private renderQuestItem(quest: Quest, progress: StoryProgress): string {
    const lang = i18n.getLanguage();
    const title = lang === 'de' && quest.titleDe ? quest.titleDe : quest.title;

    const isCompleted = progress.completedQuests.includes(quest.id);
    const isCurrent = progress.currentQuest === quest.id;
    const statusClass = isCompleted ? 'completed' : isCurrent ? 'current' : 'locked';
    const icon = isCompleted ? '[x]' : isCurrent ? '>' : '[ ]';

    return `
      <div class="quest-item ${statusClass}">
        <span class="quest-status-icon">${icon}</span>
        <span>${title}</span>
      </div>
    `;
  }

  private getDifficultyLabel(difficulty: QuestDifficulty): string {
    switch (difficulty) {
      case QuestDifficulty.BEGINNER:
        return 'Beginner';
      case QuestDifficulty.EASY:
        return 'Easy';
      case QuestDifficulty.MEDIUM:
        return 'Medium';
      case QuestDifficulty.HARD:
        return 'Hard';
      case QuestDifficulty.EXPERT:
        return 'Expert';
      default:
        return difficulty;
    }
  }

  private setupEventListeners(): void {
    if (!this.container) {
      return;
    }

    // Skill Tree button
    const skillTreeBtn = this.container.querySelector('#openSkillTreeBtn');
    if (skillTreeBtn) {
      skillTreeBtn.addEventListener('click', () => {
        EventBus.emit('nav:change', { page: 'skill-tree' });
      });
    }

    // Chapter cards
    const chapterCards = this.container.querySelectorAll('.chapter-card:not(.locked)');
    chapterCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });
    });

    // Start quest button
    const startQuestBtn = this.container.querySelector('.start-quest-btn');
    if (startQuestBtn) {
      startQuestBtn.addEventListener('click', () => {
        const questId = startQuestBtn.getAttribute('data-quest-id');
        if (questId) {
          // Navigate to appropriate practice page based on quest type
          EventBus.emit('nav:change', { page: 'practice' });
        }
      });
    }
  }
}
