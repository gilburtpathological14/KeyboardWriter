/**
 * Algorithm Training Page
 * Specialized typing practice for algorithms and data structures
 */

import { VirtualKeyboard } from '../components/keyboard/VirtualKeyboard';
import { EventBus, Store } from '../core';
import { ALGORITHM_CATEGORIES } from '../data/algorithmExercises';
import { FRAMEWORK_CATEGORIES } from '../data/frameworkExercises';
import { CodeSnippet } from '../data/programmingExercises';

type CategoryType = 'algorithms' | 'frameworks';
type Difficulty = 'beginner' | 'intermediate' | 'advanced';

interface Category {
  id: string;
  name: string;
  icon: string;
  snippets: CodeSnippet[];
}

/**
 * Algorithm Training Page Controller
 */
export class AlgorithmTrainingPage {
  private keyboard: VirtualKeyboard | null = null;
  private currentCategoryType: CategoryType = 'algorithms';
  private currentCategoryIndex: number = 0;
  private currentSnippetIndex: number = 0;
  private currentDifficulty: Difficulty | 'all' = 'all';
  private currentInput: string = '';
  private isTyping: boolean = false;
  private startTime: number = 0;
  private errors: number = 0;
  private readonly boundKeydownHandler: ((e: KeyboardEvent) => void) | null = null;

  constructor() {
    this.boundKeydownHandler = this.handleKeyboardInput.bind(this);
  }

  /**
   * Get current categories based on type
   */
  private getCategories(): Category[] {
    return this.currentCategoryType === 'algorithms' ? ALGORITHM_CATEGORIES : FRAMEWORK_CATEGORIES;
  }

  /**
   * Get current category
   */
  private getCurrentCategory(): Category | undefined {
    const categories = this.getCategories();
    return categories[this.currentCategoryIndex];
  }

  /**
   * Get filtered snippets
   */
  private getFilteredSnippets(): CodeSnippet[] {
    const category = this.getCurrentCategory();
    if (!category) {
      return [];
    }

    if (this.currentDifficulty === 'all') {
      return category.snippets;
    }

    return category.snippets.filter(s => s.difficulty === this.currentDifficulty);
  }

  /**
   * Get current snippet
   */
  private getCurrentSnippet(): CodeSnippet | undefined {
    const snippets = this.getFilteredSnippets();
    return snippets[this.currentSnippetIndex];
  }

  /**
   * Render the page
   */
  render(): string {
    return `
      <div class="algorithm-training-container">
        ${this.renderHeader()}
        ${this.renderTypeSelector()}
        ${this.renderCategorySelector()}
        ${this.renderDifficultyFilter()}
        ${this.renderCodeArea()}
        ${this.renderKeyboard()}
        ${this.renderStats()}
      </div>

      <style>
        .algorithm-training-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: var(--space-4);
        }

        .algorithm-training-header {
          margin-bottom: var(--space-6);
        }

        .algorithm-training-header h1 {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .type-selector {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-4);
        }

        .type-btn {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-secondary);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-medium);
        }

        .type-btn:hover {
          border-color: var(--accent-primary);
          background: var(--bg-tertiary);
        }

        .type-btn.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }

        .type-btn-icon {
          font-size: var(--font-size-xl);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: var(--space-3);
          margin-bottom: var(--space-4);
        }

        .category-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3);
          background: var(--bg-secondary);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .category-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .category-card.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: white;
        }

        .category-icon {
          font-size: var(--font-size-2xl);
        }

        .category-name {
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-sm);
        }

        .category-count {
          font-size: var(--font-size-xs);
          opacity: 0.7;
        }

        .difficulty-filter {
          display: flex;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
        }

        .difficulty-btn {
          padding: var(--space-2) var(--space-3);
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: var(--font-size-sm);
          transition: all 0.15s ease;
        }

        .difficulty-btn:hover {
          border-color: var(--accent-primary);
        }

        .difficulty-btn.active {
          background: var(--accent-secondary);
          border-color: var(--accent-secondary);
          color: white;
        }

        .code-editor {
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          font-family: var(--font-mono);
          margin-bottom: var(--space-4);
        }

        .code-editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-primary);
        }

        .code-editor-title {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .code-editor-title h3 {
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-semibold);
        }

        .code-editor-title span {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
        }

        .code-editor-badge {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .difficulty-badge {
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-medium);
        }

        .difficulty-badge.beginner {
          background: var(--accent-success);
          color: white;
        }

        .difficulty-badge.intermediate {
          background: var(--accent-warning);
          color: black;
        }

        .difficulty-badge.advanced {
          background: var(--accent-error);
          color: white;
        }

        .language-badge {
          padding: var(--space-1) var(--space-2);
          background: var(--accent-primary);
          color: white;
          border-radius: var(--radius-sm);
          font-size: var(--font-size-xs);
          font-weight: var(--font-weight-medium);
          text-transform: uppercase;
        }

        .code-editor-content {
          padding: var(--space-4);
          min-height: 200px;
          max-height: 400px;
          overflow-y: auto;
        }

        .code-target {
          font-size: var(--font-size-base);
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .code-char {
          position: relative;
        }

        .code-char.correct {
          color: var(--accent-success);
        }

        .code-char.incorrect {
          color: var(--accent-error);
          background: rgba(239, 68, 68, 0.2);
          border-radius: 2px;
        }

        .code-char.current {
          background: var(--accent-primary);
          color: white;
          border-radius: 2px;
          animation: pulse 1s ease infinite;
        }

        .code-char.pending {
          color: var(--text-muted);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .code-editor-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-primary);
        }

        .snippet-nav {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .nav-btn {
          padding: var(--space-2) var(--space-3);
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .nav-btn:hover:not(:disabled) {
          border-color: var(--accent-primary);
          background: var(--accent-primary);
          color: white;
        }

        .nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .snippet-counter {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
          margin-top: var(--space-4);
        }

        .stat-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
        }

        .stat-card-value {
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          color: var(--accent-primary);
        }

        .stat-card-label {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
          margin-top: var(--space-1);
        }
      </style>
    `;
  }

  /**
   * Render header
   */
  private renderHeader(): string {
    return `
      <div class="algorithm-training-header">
        <h1>
          <span style="font-size: 1.5em;">🧠</span>
          Algorithmen & Framework Training
        </h1>
        <p style="color: var(--text-secondary); margin-top: var(--space-2);">
          Verbessere deine Programmierfähigkeiten durch Tippen von echtem Code
        </p>
      </div>
    `;
  }

  /**
   * Render type selector
   */
  private renderTypeSelector(): string {
    return `
      <div class="type-selector">
        <button class="type-btn ${this.currentCategoryType === 'algorithms' ? 'active' : ''}" data-type="algorithms">
          <span class="type-btn-icon">🔢</span>
          <span>Algorithmen & Datenstrukturen</span>
        </button>
        <button class="type-btn ${this.currentCategoryType === 'frameworks' ? 'active' : ''}" data-type="frameworks">
          <span class="type-btn-icon">⚛️</span>
          <span>React & TypeScript</span>
        </button>
      </div>
    `;
  }

  /**
   * Render category selector
   */
  private renderCategorySelector(): string {
    const categories = this.getCategories();

    return `
      <div class="category-grid">
        ${categories
          .map(
            (cat, index) => `
          <div class="category-card ${index === this.currentCategoryIndex ? 'active' : ''}" data-category="${index}">
            <span class="category-icon">${cat.icon}</span>
            <span class="category-name">${cat.name}</span>
            <span class="category-count">${cat.snippets.length} Übungen</span>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }

  /**
   * Render difficulty filter
   */
  private renderDifficultyFilter(): string {
    const difficulties: { id: Difficulty | 'all'; label: string }[] = [
      { id: 'all', label: 'Alle' },
      { id: 'beginner', label: '🟢 Anfänger' },
      { id: 'intermediate', label: '🟡 Mittel' },
      { id: 'advanced', label: '🔴 Fortgeschritten' },
    ];

    return `
      <div class="difficulty-filter">
        ${difficulties
          .map(
            d => `
          <button class="difficulty-btn ${this.currentDifficulty === d.id ? 'active' : ''}" data-difficulty="${d.id}">
            ${d.label}
          </button>
        `
          )
          .join('')}
      </div>
    `;
  }

  /**
   * Render code area
   */
  private renderCodeArea(): string {
    const snippet = this.getCurrentSnippet();
    const snippets = this.getFilteredSnippets();

    if (!snippet) {
      return `
        <div class="code-editor">
          <div class="code-editor-content" style="text-align: center; padding: var(--space-8);">
            <p style="color: var(--text-muted);">Keine Übungen in dieser Kategorie gefunden.</p>
            <p style="color: var(--text-muted); font-size: var(--font-size-sm);">Wähle eine andere Kategorie oder entferne den Schwierigkeitsfilter.</p>
          </div>
        </div>
      `;
    }

    const targetChars = snippet.code.split('');
    const inputChars = this.currentInput.split('');

    return `
      <div class="code-editor">
        <div class="code-editor-header">
          <div class="code-editor-title">
            <h3>${snippet.title}</h3>
            <span>${snippet.description}</span>
          </div>
          <div class="code-editor-badge">
            <span class="difficulty-badge ${snippet.difficulty}">${snippet.difficulty}</span>
            <span class="language-badge">${snippet.language}</span>
          </div>
        </div>
        
        <div class="code-editor-content">
          <div class="code-target" id="code-target">
            ${this.renderTargetCode(targetChars, inputChars)}
          </div>
        </div>

        <div class="code-editor-footer">
          <div class="snippet-nav">
            <button class="nav-btn" id="btn-prev" ${this.currentSnippetIndex === 0 ? 'disabled' : ''}>← Zurück</button>
            <span class="snippet-counter">${this.currentSnippetIndex + 1} / ${snippets.length}</span>
            <button class="nav-btn" id="btn-next" ${this.currentSnippetIndex >= snippets.length - 1 ? 'disabled' : ''}>Weiter →</button>
          </div>
          <div>
            ${
              !this.isTyping
                ? `
              <button class="btn btn-primary" id="btn-start-typing">
                ▶ Starten
              </button>
            `
                : `
              <button class="btn btn-ghost" id="btn-reset">
                ↻ Reset
              </button>
            `
            }
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render target code with character feedback
   */
  private renderTargetCode(targetChars: string[], inputChars: string[]): string {
    let result = '';

    for (let i = 0; i < targetChars.length; i++) {
      const char = targetChars[i];
      let className = 'code-char';

      if (i < inputChars.length) {
        if (inputChars[i] === char) {
          className += ' correct';
        } else {
          className += ' incorrect';
        }
      } else if (i === inputChars.length) {
        className += ' current';
      } else {
        className += ' pending';
      }

      result += `<span class="${className}">${this.escapeHtml(char)}</span>`;
    }

    return result;
  }

  /**
   * Render keyboard
   */
  private renderKeyboard(): string {
    return `
      <div class="keyboard-section" style="margin-top: var(--space-4);">
        <div id="algorithm-keyboard-container"></div>
      </div>
    `;
  }

  /**
   * Render stats
   */
  private renderStats(): string {
    const wpm = this.calculateWPM();
    const accuracy = this.calculateAccuracy();

    return `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-value">${wpm}</div>
          <div class="stat-card-label">WPM</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-value">${accuracy}%</div>
          <div class="stat-card-label">Genauigkeit</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-value">${this.currentInput.length}</div>
          <div class="stat-card-label">Zeichen</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-value">${this.errors}</div>
          <div class="stat-card-label">Fehler</div>
        </div>
      </div>
    `;
  }

  /**
   * Calculate WPM
   */
  private calculateWPM(): number {
    if (!this.isTyping || this.currentInput.length === 0) {
      return 0;
    }
    const elapsedMinutes = (Date.now() - this.startTime) / 60000;
    if (elapsedMinutes === 0) {
      return 0;
    }
    const words = this.currentInput.length / 5;
    return Math.round(words / elapsedMinutes);
  }

  /**
   * Calculate accuracy
   */
  private calculateAccuracy(): number {
    if (this.currentInput.length === 0) {
      return 100;
    }
    const snippet = this.getCurrentSnippet();
    if (!snippet) {
      return 100;
    }

    let correct = 0;
    for (let i = 0; i < this.currentInput.length; i++) {
      if (this.currentInput[i] === snippet.code[i]) {
        correct++;
      }
    }
    return Math.round((correct / this.currentInput.length) * 100);
  }

  /**
   * Escape HTML
   */
  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
      '\n': '<br>',
      ' ': '&nbsp;',
    };
    return text.replace(/[&<>"'\n ]/g, m => map[m] || m);
  }

  /**
   * Start typing
   */
  private startTyping(): void {
    this.isTyping = true;
    this.startTime = Date.now();
    this.currentInput = '';
    this.errors = 0;
    this.updateDisplay();
  }

  /**
   * Reset typing
   */
  private resetTyping(): void {
    this.isTyping = false;
    this.currentInput = '';
    this.errors = 0;
    this.startTime = 0;
    this.updateDisplay();
  }

  /**
   * Handle key press
   */
  private handleKeyPress(key: string): void {
    if (!this.isTyping) {
      return;
    }

    const snippet = this.getCurrentSnippet();
    if (!snippet) {
      return;
    }

    const expectedChar = snippet.code[this.currentInput.length];

    if (key === 'Backspace') {
      if (this.currentInput.length > 0) {
        this.currentInput = this.currentInput.slice(0, -1);
      }
    } else if (key === 'Enter') {
      if (expectedChar === '\n') {
        this.currentInput += '\n';
      }
    } else if (key === 'Tab') {
      // Handle tab as spaces (2 spaces)
      this.currentInput += '  ';
    } else if (key.length === 1) {
      if (key !== expectedChar) {
        this.errors++;
      }
      this.currentInput += key;

      // Check completion
      if (this.currentInput.length >= snippet.code.length) {
        this.completeExercise();
      }
    }

    this.updateDisplay();
  }

  /**
   * Complete exercise
   */
  private completeExercise(): void {
    // Prevent double-completion
    if (!this.isTyping) {
      return;
    }

    const wpm = this.calculateWPM();
    const accuracy = this.calculateAccuracy();

    // Auto-advance to next snippet
    const snippets = this.getFilteredSnippets();
    if (this.currentSnippetIndex < snippets.length - 1) {
      this.currentSnippetIndex++;
      this.resetTyping();

      EventBus.emit('ui:toast', {
        message: `Übung abgeschlossen! ${wpm} WPM, ${accuracy}% Genauigkeit`,
        type: accuracy >= 90 ? 'success' : 'warning',
      });

      setTimeout(() => this.startTyping(), 500);
    } else {
      this.resetTyping();
      EventBus.emit('ui:toast', {
        message: `Alle Übungen abgeschlossen! ${wpm} WPM, ${accuracy}% Genauigkeit 🎉`,
        type: 'success',
      });
    }
  }

  /**
   * Update display
   */
  private updateDisplay(): void {
    const codeTarget = document.getElementById('code-target');
    if (codeTarget) {
      const snippet = this.getCurrentSnippet();
      if (snippet) {
        const targetChars = snippet.code.split('');
        const inputChars = this.currentInput.split('');
        codeTarget.innerHTML = this.renderTargetCode(targetChars, inputChars);
      }
    }

    // Update stats
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
      statsGrid.outerHTML = this.renderStats();
    }
  }

  /**
   * Handle keyboard input
   */
  private handleKeyboardInput(event: KeyboardEvent): void {
    const state = Store.getState();
    if (state.currentPage !== 'algorithm-training' || !this.isTyping) {
      return;
    }

    // Prevent default for typing keys
    if (event.key !== 'Escape' && !event.metaKey && !event.ctrlKey) {
      event.preventDefault();
    }

    if (event.key === 'Escape') {
      this.resetTyping();
      return;
    }

    this.handleKeyPress(event.key);
  }

  /**
   * Initialize the page
   */
  init(): void {
    // Initialize keyboard
    const keyboardContainer = document.getElementById('algorithm-keyboard-container');
    if (keyboardContainer) {
      this.keyboard = new VirtualKeyboard('algorithm-keyboard-container');
    }

    this.setupEventListeners();
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    // Type selector
    document.querySelectorAll('[data-type]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type') as CategoryType;
        this.currentCategoryType = type;
        this.currentCategoryIndex = 0;
        this.currentSnippetIndex = 0;
        this.resetTyping();
        EventBus.emit('nav:change', { page: 'algorithm-training' });
      });
    });

    // Category selector
    document.querySelectorAll('[data-category]').forEach(card => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-category') || '0');
        this.currentCategoryIndex = index;
        this.currentSnippetIndex = 0;
        this.resetTyping();
        EventBus.emit('nav:change', { page: 'algorithm-training' });
      });
    });

    // Difficulty filter
    document.querySelectorAll('[data-difficulty]').forEach(btn => {
      btn.addEventListener('click', () => {
        const difficulty = btn.getAttribute('data-difficulty') as Difficulty | 'all';
        this.currentDifficulty = difficulty;
        this.currentSnippetIndex = 0;
        this.resetTyping();
        EventBus.emit('nav:change', { page: 'algorithm-training' });
      });
    });

    // Navigation buttons
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    prevBtn?.addEventListener('click', () => {
      if (this.currentSnippetIndex > 0) {
        this.currentSnippetIndex--;
        this.resetTyping();
        EventBus.emit('nav:change', { page: 'algorithm-training' });
      }
    });

    nextBtn?.addEventListener('click', () => {
      const snippets = this.getFilteredSnippets();
      if (this.currentSnippetIndex < snippets.length - 1) {
        this.currentSnippetIndex++;
        this.resetTyping();
        EventBus.emit('nav:change', { page: 'algorithm-training' });
      }
    });

    // Start button
    const startBtn = document.getElementById('btn-start-typing');
    startBtn?.addEventListener('click', () => {
      this.startTyping();
      EventBus.emit('nav:change', { page: 'algorithm-training' });
    });

    // Reset button
    const resetBtn = document.getElementById('btn-reset');
    resetBtn?.addEventListener('click', () => {
      this.resetTyping();
      EventBus.emit('nav:change', { page: 'algorithm-training' });
    });

    // Keyboard input
    if (this.boundKeydownHandler) {
      document.addEventListener('keydown', this.boundKeydownHandler);
    }
  }

  /**
   * Remove keyboard input listener
   */
  private removeKeyboardInput(): void {
    if (this.boundKeydownHandler) {
      document.removeEventListener('keydown', this.boundKeydownHandler);
    }
  }

  /**
   * Destroy the page
   */
  destroy(): void {
    if (this.keyboard) {
      this.keyboard.destroy();
      this.keyboard = null;
    }
    this.removeKeyboardInput();
  }
}
