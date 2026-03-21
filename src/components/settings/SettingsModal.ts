/**
 * Settings Modal Component
 * Provides UI for user preferences with i18n support
 */

import { EventBus } from '../../core';
import { Settings, SettingsService } from '../../core/SettingsService';
import { i18n, t } from '../../core/i18n';

export class SettingsModal {
  private isOpen: boolean = false;
  private settings: Settings;
  private unsubscribeI18n: (() => void) | null = null;

  constructor() {
    this.settings = SettingsService.getSettings();
    SettingsService.subscribe(settings => {
      this.settings = settings;
    });
  }

  /**
   * Open the modal
   */
  open(): void {
    this.isOpen = true;
    this.settings = SettingsService.getSettings();
    this.render();
    this.setupEventListeners();

    // Subscribe to language changes
    this.unsubscribeI18n = i18n.subscribe(() => {
      if (this.isOpen) {
        this.render();
        this.setupEventListeners();
      }
    });
  }

  /**
   * Close the modal
   */
  close(): void {
    this.isOpen = false;
    const backdrop = document.getElementById('settings-modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    // Unsubscribe from language changes
    if (this.unsubscribeI18n) {
      this.unsubscribeI18n();
      this.unsubscribeI18n = null;
    }
  }

  /**
   * Render the modal
   */
  private render(): void {
    // Remove existing modal if any
    const existing = document.getElementById('settings-modal-backdrop');
    if (existing) {
      existing.remove();
    }

    const backdrop = document.createElement('div');
    backdrop.id = 'settings-modal-backdrop';
    backdrop.className = 'modal-backdrop open';
    backdrop.innerHTML = this.getModalHTML();

    document.body.appendChild(backdrop);
  }

  /**
   * Get modal HTML
   */
  private getModalHTML(): string {
    const currentLang = i18n.getLanguage();

    return `
      <div class="modal settings-modal" style="max-width: 600px; max-height: 80vh;">
        <div class="modal-header">
          <h2 class="modal-title">${t('settings.title')}</h2>
          <button class="modal-close" id="settings-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="settings-content" style="overflow-y: auto; max-height: calc(80vh - 120px);">
          <!-- Language Settings -->
          <div class="settings-section">
            <h3 class="settings-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              ${t('settings.language')}
            </h3>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.language')}</span>
                <span class="settings-description">${t('settings.languageDescription')}</span>
              </div>
              <select class="settings-select" id="setting-language">
                <option value="en" ${currentLang === 'en' ? 'selected' : ''}>${t('settings.languageEn')}</option>
                <option value="de" ${currentLang === 'de' ? 'selected' : ''}>${t('settings.languageDe')}</option>
              </select>
            </div>
          </div>
          
          <!-- Display Settings -->
          <div class="settings-section">
            <h3 class="settings-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              ${t('settings.display')}
            </h3>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.theme')}</span>
                <span class="settings-description">${t('settings.themeDescription')}</span>
              </div>
              <select class="settings-select" id="setting-theme">
                <option value="dark" ${this.settings.theme === 'dark' ? 'selected' : ''}>${t('settings.themeDark')}</option>
                <option value="light" ${this.settings.theme === 'light' ? 'selected' : ''}>${t('settings.themeLight')}</option>
                <option value="auto" ${this.settings.theme === 'auto' ? 'selected' : ''}>${t('settings.themeAuto')}</option>
              </select>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.fontSize')}</span>
                <span class="settings-description">${t('settings.fontSizeDescription')}</span>
              </div>
              <select class="settings-select" id="setting-fontSize">
                <option value="small" ${this.settings.fontSize === 'small' ? 'selected' : ''}>${t('settings.fontSizeSmall')}</option>
                <option value="medium" ${this.settings.fontSize === 'medium' ? 'selected' : ''}>${t('settings.fontSizeMedium')}</option>
                <option value="large" ${this.settings.fontSize === 'large' ? 'selected' : ''}>${t('settings.fontSizeLarge')}</option>
              </select>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.showFingerColors')}</span>
                <span class="settings-description">${t('settings.showFingerColorsDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-showFingerColors" ${this.settings.showFingerColors ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.highlightNextKey')}</span>
                <span class="settings-description">${t('settings.highlightNextKeyDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-highlightNextKey" ${this.settings.highlightNextKey ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <!-- Sound Settings -->
          <div class="settings-section">
            <h3 class="settings-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
              ${t('settings.sound')}
            </h3>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.soundEnabled')}</span>
                <span class="settings-description">${t('settings.soundEnabledDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-soundEnabled" ${this.settings.soundEnabled ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.volume')}</span>
                <span class="settings-description">${this.settings.soundVolume}%</span>
              </div>
              <input type="range" class="settings-range" id="setting-soundVolume" 
                min="0" max="100" value="${this.settings.soundVolume}"
                ${!this.settings.soundEnabled ? 'disabled' : ''}>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.keyPressSound')}</span>
                <span class="settings-description">${t('settings.keyPressSoundDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-keyPressSound" 
                  ${this.settings.keyPressSound ? 'checked' : ''}
                  ${!this.settings.soundEnabled ? 'disabled' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.errorSound')}</span>
                <span class="settings-description">${t('settings.errorSoundDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-errorSound" 
                  ${this.settings.errorSound ? 'checked' : ''}
                  ${!this.settings.soundEnabled ? 'disabled' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.successSound')}</span>
                <span class="settings-description">${t('settings.successSoundDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-successSound" 
                  ${this.settings.successSound ? 'checked' : ''}
                  ${!this.settings.soundEnabled ? 'disabled' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <!-- Typing Settings -->
          <div class="settings-section">
            <h3 class="settings-section-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <line x1="6" y1="8" x2="6" y2="8"></line>
                <line x1="10" y1="8" x2="10" y2="8"></line>
                <line x1="14" y1="8" x2="14" y2="8"></line>
                <line x1="18" y1="8" x2="18" y2="8"></line>
                <line x1="8" y1="16" x2="16" y2="16"></line>
              </svg>
              ${t('settings.typing')}
            </h3>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.keyboardLayout')}</span>
                <span class="settings-description">${t('settings.keyboardLayoutDescription')}</span>
              </div>
              <select class="settings-select" id="setting-keyboardLayout">
                <option value="qwertz" ${this.settings.keyboardLayout === 'qwertz' ? 'selected' : ''}>${t('settings.layoutQwertz')}</option>
                <option value="qwerty" ${this.settings.keyboardLayout === 'qwerty' ? 'selected' : ''}>${t('settings.layoutQwerty')}</option>
              </select>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.defaultTestDuration')}</span>
                <span class="settings-description">${t('settings.defaultTestDurationDescription')}</span>
              </div>
              <select class="settings-select" id="setting-defaultTestDuration">
                <option value="30" ${this.settings.defaultTestDuration === 30 ? 'selected' : ''}>30 ${t('settings.seconds')}</option>
                <option value="60" ${this.settings.defaultTestDuration === 60 ? 'selected' : ''}>60 ${t('settings.seconds')}</option>
                <option value="120" ${this.settings.defaultTestDuration === 120 ? 'selected' : ''}>120 ${t('settings.seconds')}</option>
              </select>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.showWPM')}</span>
                <span class="settings-description">${t('settings.showWPMDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-showWPM" ${this.settings.showWPM ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
            
            <div class="settings-row">
              <div class="settings-label">
                <span>${t('settings.showAccuracy')}</span>
                <span class="settings-description">${t('settings.showAccuracyDescription')}</span>
              </div>
              <label class="settings-toggle">
                <input type="checkbox" id="setting-showAccuracy" ${this.settings.showAccuracy ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
        
        <div class="modal-footer" style="display: flex; justify-content: space-between; padding-top: var(--space-4); border-top: 1px solid var(--border-primary); margin-top: var(--space-4);">
          <button class="btn btn-ghost" id="settings-reset">
            ${t('settings.reset')}
          </button>
          <button class="btn btn-primary" id="settings-save">
            ${t('settings.close')}
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    const backdrop = document.getElementById('settings-modal-backdrop');
    if (!backdrop) {
      return;
    }

    // Close button
    document.getElementById('settings-close')?.addEventListener('click', () => this.close());
    document.getElementById('settings-save')?.addEventListener('click', () => this.close());

    // Reset button
    document.getElementById('settings-reset')?.addEventListener('click', () => {
      SettingsService.resetSettings();
      this.render();
      this.setupEventListeners();
      EventBus.emit('ui:toast', { message: t('settings.resetConfirm'), type: 'info' });
    });

    // Close on backdrop click
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) {
        this.close();
      }
    });

    // Close on Escape key
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Setting changes
    this.setupSettingListeners();
  }

  /**
   * Setup individual setting listeners
   */
  private setupSettingListeners(): void {
    // Language - also update exercise language to match
    document.getElementById('setting-language')?.addEventListener('change', e => {
      const value = (e.target as HTMLSelectElement).value as 'en' | 'de';
      i18n.setLanguage(value);
      // Also update exercise language so practice texts match the UI language
      SettingsService.updateSettings({ exerciseLanguage: value });
    });

    // Theme
    document.getElementById('setting-theme')?.addEventListener('change', e => {
      const value = (e.target as HTMLSelectElement).value as Settings['theme'];
      SettingsService.updateSettings({ theme: value });
    });

    // Font size
    document.getElementById('setting-fontSize')?.addEventListener('change', e => {
      const value = (e.target as HTMLSelectElement).value as Settings['fontSize'];
      SettingsService.updateSettings({ fontSize: value });
    });

    // Finger colors
    document.getElementById('setting-showFingerColors')?.addEventListener('change', e => {
      SettingsService.updateSettings({ showFingerColors: (e.target as HTMLInputElement).checked });
    });

    // Highlight next key
    document.getElementById('setting-highlightNextKey')?.addEventListener('change', e => {
      SettingsService.updateSettings({ highlightNextKey: (e.target as HTMLInputElement).checked });
    });

    // Sound enabled
    document.getElementById('setting-soundEnabled')?.addEventListener('change', e => {
      const checked = (e.target as HTMLInputElement).checked;
      SettingsService.updateSettings({ soundEnabled: checked });
      // Re-render to update disabled states
      this.render();
      this.setupEventListeners();
    });

    // Sound volume
    document.getElementById('setting-soundVolume')?.addEventListener('input', e => {
      const value = parseInt((e.target as HTMLInputElement).value, 10);
      SettingsService.updateSettings({ soundVolume: value });
      // Update description
      const description = document
        .querySelector('#setting-soundVolume')
        ?.parentElement?.querySelector('.settings-description');
      if (description) {
        description.textContent = `${value}%`;
      }
    });

    // Key press sound
    document.getElementById('setting-keyPressSound')?.addEventListener('change', e => {
      SettingsService.updateSettings({ keyPressSound: (e.target as HTMLInputElement).checked });
    });

    // Error sound
    document.getElementById('setting-errorSound')?.addEventListener('change', e => {
      SettingsService.updateSettings({ errorSound: (e.target as HTMLInputElement).checked });
    });

    // Success sound
    document.getElementById('setting-successSound')?.addEventListener('change', e => {
      SettingsService.updateSettings({ successSound: (e.target as HTMLInputElement).checked });
    });

    // Keyboard layout
    document.getElementById('setting-keyboardLayout')?.addEventListener('change', e => {
      const value = (e.target as HTMLSelectElement).value as Settings['keyboardLayout'];
      SettingsService.updateSettings({ keyboardLayout: value });
    });

    // Default test duration
    document.getElementById('setting-defaultTestDuration')?.addEventListener('change', e => {
      const value = parseInt(
        (e.target as HTMLSelectElement).value,
        10
      ) as Settings['defaultTestDuration'];
      SettingsService.updateSettings({ defaultTestDuration: value });
    });

    // Show WPM
    document.getElementById('setting-showWPM')?.addEventListener('change', e => {
      SettingsService.updateSettings({ showWPM: (e.target as HTMLInputElement).checked });
    });

    // Show accuracy
    document.getElementById('setting-showAccuracy')?.addEventListener('change', e => {
      SettingsService.updateSettings({ showAccuracy: (e.target as HTMLInputElement).checked });
    });
  }
}
