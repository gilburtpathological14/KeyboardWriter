/**
 * Skill Tree Page - Visual skill progression system
 */

import { EventBus, i18n } from '../core';
import {
  SKILL_TREE_STRUCTURE,
  SkillTier,
  type SkillNode,
  type SkillTreeCategory,
} from '../domain/models/SkillTree';
import { SkillTreeService } from '../services/SkillTreeService';
import { storyModeService } from '../services/StoryModeService';

/**
 * Skill Tree Page Class
 */
export class SkillTreePage {
  private container: HTMLElement | null = null;
  private selectedSkillId: string | null = null;

  /**
   * Render the page
   */
  render(): string {
    const skillProgress = SkillTreeService.getProgress();
    const categories = SKILL_TREE_STRUCTURE.categories;

    return `
      <div class="page skill-tree-page">
        <div class="skill-tree-container">
          <!-- Header -->
          <div class="skill-tree-header">
            <button class="btn btn-secondary" id="backBtn">
              ${i18n.t('skillTree.back')}
            </button>
            <div class="header-info">
              <h1>${i18n.t('skillTree.title')}</h1>
              <p>${i18n.t('skillTree.subtitle')}</p>
            </div>
            <div class="skill-points-display">
              <span class="points-icon">*</span>
              <span class="points-value">${skillProgress.availableSkillPoints}</span>
              <span class="points-label">${i18n.t('skillTree.availablePoints')}</span>
            </div>
          </div>

          <!-- Category Tabs -->
          <div class="category-tabs">
            ${categories
              .map(
                (cat: SkillTreeCategory, index: number) => `
              <button class="category-tab ${index === 0 ? 'active' : ''}" 
                      data-category="${cat.id}">
                <span class="tab-icon" style="color: ${cat.color}">[${cat.icon.charAt(0).toUpperCase()}]</span>
                <span class="tab-name">${i18n.getLanguage() === 'de' ? cat.nameDe : cat.name}</span>
              </button>
            `
              )
              .join('')}
          </div>

          <!-- Skill Tree Content -->
          <div class="skill-tree-content">
            ${categories
              .map(
                (cat: SkillTreeCategory, index: number) => `
              <div class="category-panel ${index === 0 ? 'active' : ''}" 
                   data-category="${cat.id}">
                ${this.renderCategorySkills(cat, skillProgress.unlockedSkills, skillProgress.skillLevels)}
              </div>
            `
              )
              .join('')}
          </div>

          <!-- Skill Detail Modal -->
          <div class="skill-detail-modal hidden" id="skillDetailModal">
            <div class="modal-backdrop"></div>
            <div class="modal-content">
              <div class="modal-header">
                <h3 id="skillModalTitle"></h3>
                <button class="modal-close" id="closeSkillModal">&times;</button>
              </div>
              <div class="modal-body">
                <p id="skillModalDescription"></p>
                <div id="skillModalEffects"></div>
                <div id="skillModalRequirements"></div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" id="upgradeSkillBtn" disabled>
                  ${i18n.t('skillTree.upgrade')}
                </button>
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
    this.container = document.querySelector('.skill-tree-page');
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
    this.selectedSkillId = null;
  }

  private getTierName(tier: SkillTier): string {
    const names: Record<number, string> = {
      [SkillTier.NOVICE]: i18n.t('skillTree.tier.novice'),
      [SkillTier.APPRENTICE]: i18n.t('skillTree.tier.apprentice'),
      [SkillTier.JOURNEYMAN]: i18n.t('skillTree.tier.journeyman'),
      [SkillTier.EXPERT]: i18n.t('skillTree.tier.expert'),
      [SkillTier.MASTER]: i18n.t('skillTree.tier.master'),
    };
    return names[tier] || `Tier ${tier}`;
  }

  private renderCategorySkills(
    category: SkillTreeCategory,
    unlockedSkills: string[],
    skillLevels: Record<string, number>
  ): string {
    const lang = i18n.getLanguage();
    const categoryName = lang === 'de' ? category.nameDe : category.name;
    const categoryDesc = lang === 'de' ? category.descriptionDe : category.description;

    // Group skills by tier
    const skillsByTier: Record<number, SkillNode[]> = {};
    for (const skill of category.skills) {
      const tierNum = skill.tier as number;
      if (!skillsByTier[tierNum]) {
        skillsByTier[tierNum] = [];
      }
      skillsByTier[tierNum].push(skill);
    }

    const tiers = Object.keys(skillsByTier)
      .map(t => parseInt(t))
      .sort((a, b) => a - b);

    return `
      <div class="category-description">
        <h2 style="color: ${category.color}">${categoryName}</h2>
        <p>${categoryDesc}</p>
      </div>
      ${tiers
        .map(tierNum => {
          const tierSkills = skillsByTier[tierNum];
          if (!tierSkills || tierSkills.length === 0) {
            return '';
          }

          return `
          <div class="skill-tier">
            <div class="tier-header">
              <span class="tier-badge tier-${tierNum}">${this.getTierName(tierNum as SkillTier)}</span>
            </div>
            <div class="skills-grid">
              ${tierSkills.map(skill => this.renderSkillNode(skill, unlockedSkills, skillLevels)).join('')}
            </div>
          </div>
        `;
        })
        .join('')}
    `;
  }

  private renderSkillNode(
    skill: SkillNode,
    unlockedSkills: string[],
    skillLevels: Record<string, number>
  ): string {
    const isUnlocked = unlockedSkills.includes(skill.id);
    const currentLevel = skillLevels[skill.id] || 0;
    const canUpgradeResult = SkillTreeService.canUpgradeSkill(skill.id);

    let statusClass = 'locked';
    let statusBadge = '';

    if (isUnlocked || currentLevel > 0) {
      statusClass = 'unlocked';
      statusBadge = '<span class="skill-status-badge unlocked">OK</span>';
    } else if (canUpgradeResult.canUpgrade) {
      statusClass = 'available';
      statusBadge = '<span class="skill-status-badge available">!</span>';
    }

    const lang = i18n.getLanguage();
    const name = lang === 'de' ? skill.nameDe : skill.name;

    return `
      <div class="skill-node ${statusClass}" data-skill-id="${skill.id}">
        ${statusBadge}
        <div class="skill-icon">[${skill.icon.charAt(0).toUpperCase()}]</div>
        <div class="skill-name">${name}</div>
        <div class="skill-level">${i18n.t('skillTree.level')} ${currentLevel}/${skill.maxLevel}</div>
        ${
          currentLevel < skill.maxLevel
            ? `
          <div class="skill-cost">
            <span>*</span>
            <span>${skill.costPerLevel} Points</span>
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  private setupEventListeners(): void {
    if (!this.container) {
      return;
    }

    // Back button
    const backBtn = this.container.querySelector('#backBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        EventBus.emit('nav:change', { page: 'story-mode' });
      });
    }

    // Category tabs
    const tabs = this.container.querySelectorAll('.category-tab');
    const panels = this.container.querySelectorAll('.category-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');

        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const panel = this.container?.querySelector(`.category-panel[data-category="${category}"]`);
        if (panel) {
          panel.classList.add('active');
        }
      });
    });

    // Skill nodes
    const skillNodes = this.container.querySelectorAll('.skill-node:not(.locked)');
    const modal = this.container.querySelector('#skillDetailModal');
    const closeModalBtn = this.container.querySelector('#closeSkillModal');
    const backdrop = this.container.querySelector('.modal-backdrop');
    const upgradeBtn = this.container.querySelector('#upgradeSkillBtn') as HTMLButtonElement;

    skillNodes.forEach(node => {
      node.addEventListener('click', () => {
        this.selectedSkillId = node.getAttribute('data-skill-id');
        if (this.selectedSkillId) {
          this.showSkillModal(this.selectedSkillId);
        }
      });
    });

    const closeModal = (): void => {
      modal?.classList.add('hidden');
      this.selectedSkillId = null;
    };

    closeModalBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    // Upgrade button
    if (upgradeBtn) {
      upgradeBtn.addEventListener('click', () => {
        if (this.selectedSkillId) {
          const result = SkillTreeService.upgradeSkill(this.selectedSkillId);
          if (result.success) {
            // Re-render page to show changes
            const mainContent = document.querySelector('.app-main');
            if (mainContent) {
              mainContent.innerHTML = this.render();
              this.init();
            }
          }
        }
      });
    }
  }

  private showSkillModal(skillId: string): void {
    if (!this.container) {
      return;
    }

    const skill = SkillTreeService.getSkill(skillId);
    if (!skill) {
      return;
    }

    const modal = this.container.querySelector('#skillDetailModal');
    const titleEl = this.container.querySelector('#skillModalTitle');
    const descEl = this.container.querySelector('#skillModalDescription');
    const effectsEl = this.container.querySelector('#skillModalEffects');
    const reqEl = this.container.querySelector('#skillModalRequirements');
    const upgradeBtn = this.container.querySelector('#upgradeSkillBtn') as HTMLButtonElement;

    const lang = i18n.getLanguage();
    const name = lang === 'de' ? skill.nameDe : skill.name;
    const desc = lang === 'de' ? skill.descriptionDe : skill.description;

    if (titleEl) {
      titleEl.textContent = name;
    }
    if (descEl) {
      descEl.textContent = desc;
    }

    // Effects
    if (effectsEl) {
      effectsEl.innerHTML = `
        <div class="effect-list">
          ${skill.effects
            .map(effect => {
              const effectDesc = lang === 'de' ? effect.descriptionDe : effect.description;
              return `
              <div class="effect-item">
                <span>+</span>
                <span>${effectDesc}</span>
              </div>
            `;
            })
            .join('')}
        </div>
      `;
    }

    // Requirements
    if (reqEl) {
      const playerStats = storyModeService.getPlayerStats();
      const reqSkillProgress = SkillTreeService.getProgress();

      const levelMet = playerStats.level >= 1;
      const prereqsMet = skill.prerequisites.every(p =>
        reqSkillProgress.unlockedSkills.includes(p)
      );
      const pointsMet = reqSkillProgress.availableSkillPoints >= skill.costPerLevel;

      reqEl.innerHTML = `
        <div class="requirement-list">
          <h4>${i18n.t('skillTree.requirements')}</h4>
          <div class="requirement-item ${levelMet ? 'met' : 'unmet'}">
            <span>${levelMet ? '[x]' : '[ ]'}</span>
            <span>Level 1</span>
          </div>
          ${
            skill.prerequisites.length > 0
              ? `
            <div class="requirement-item ${prereqsMet ? 'met' : 'unmet'}">
              <span>${prereqsMet ? '[x]' : '[ ]'}</span>
              <span>Prerequisites: ${skill.prerequisites.join(', ')}</span>
            </div>
          `
              : ''
          }
          <div class="requirement-item ${pointsMet ? 'met' : 'unmet'}">
            <span>${pointsMet ? '[x]' : '[ ]'}</span>
            <span>${skill.costPerLevel} Skill Points</span>
          </div>
        </div>
      `;
    }

    // Update upgrade button
    const canUpgradeResult = SkillTreeService.canUpgradeSkill(skillId);
    const btnSkillProgress = SkillTreeService.getProgress();
    const currentLevel = btnSkillProgress.skillLevels[skillId] || 0;
    const isMaxed = currentLevel >= skill.maxLevel;

    if (upgradeBtn) {
      upgradeBtn.disabled = !canUpgradeResult.canUpgrade || isMaxed;
      upgradeBtn.textContent = isMaxed ? i18n.t('skillTree.maxLevel') : i18n.t('skillTree.upgrade');
    }

    modal?.classList.remove('hidden');
  }
}
