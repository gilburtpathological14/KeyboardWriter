/**
 * Performance Charts Component
 * Displays comparison charts for WPM, accuracy, and practice time
 */

import { DailySession, progressTrackingService } from '../../services';

export class PerformanceCharts {
  private readonly container: HTMLElement;
  private currentPeriod: 'week' | 'month' | 'allTime' = 'week';

  constructor(containerId: string) {
    const el = document.getElementById(containerId);
    if (!el) {
      throw new Error(`Container element with id '${containerId}' not found`);
    }
    this.container = el;
    this.render();
  }

  render(): void {
    const comparison = progressTrackingService.getPerformanceComparison(this.currentPeriod);
    const recentSessions = progressTrackingService.getRecentSessions(7);
    const timeStats = progressTrackingService.getPracticeTimeStats();
    const milestones = progressTrackingService.getAchievedMilestonesCount();

    this.container.innerHTML = `
      <div class="performance-charts">
        <!-- Period Selector -->
        <div class="period-selector">
          <button class="period-btn ${this.currentPeriod === 'week' ? 'active' : ''}" data-period="week">Woche</button>
          <button class="period-btn ${this.currentPeriod === 'month' ? 'active' : ''}" data-period="month">Monat</button>
          <button class="period-btn ${this.currentPeriod === 'allTime' ? 'active' : ''}" data-period="allTime">Gesamt</button>
        </div>

        <!-- Summary Stats -->
        <div class="stats-grid">
          ${this.renderStatCard('Übungszeit', this.formatTime(timeStats.total), `Heute: ${this.formatTime(timeStats.today)}`, 'clock')}
          ${this.renderStatCard('Durchschn. WPM', `${comparison.current.wpm}`, this.renderChange(comparison.change.wpm, comparison.change.wpmPercent), 'zap')}
          ${this.renderStatCard('Genauigkeit', `${comparison.current.accuracy}%`, this.renderChange(comparison.change.accuracy, comparison.change.accuracyPercent), 'target')}
          ${this.renderStatCard('Meilensteine', `${milestones.achieved}/${milestones.total}`, `${Math.round(milestones.achieved / milestones.total * 100)}% erreicht`, 'trophy')}
        </div>

        <!-- Comparison Charts -->
        <div class="charts-row">
          <div class="chart-card">
            <h3 class="chart-title">WPM Vergleich</h3>
            ${this.renderComparisonBar('Aktuell', comparison.current.wpm, 'Vorher', comparison.previous.wpm, 100)}
          </div>
          <div class="chart-card">
            <h3 class="chart-title">Genauigkeit Vergleich</h3>
            ${this.renderComparisonBar('Aktuell', comparison.current.accuracy, 'Vorher', comparison.previous.accuracy, 100)}
          </div>
        </div>

        <!-- Activity Heatmap / Week View -->
        <div class="chart-card full-width">
          <h3 class="chart-title">Letzte 7 Tage Aktivität</h3>
          ${this.renderWeeklyActivity(recentSessions)}
        </div>

        <!-- Progress Bars for Time Stats -->
        <div class="chart-card full-width">
          <h3 class="chart-title">Übungszeit</h3>
          <div class="time-stats">
            ${this.renderTimeBar('Heute', timeStats.today, 30)}
            ${this.renderTimeBar('Diese Woche', timeStats.thisWeek, 150)}
            ${this.renderTimeBar('Dieser Monat', timeStats.thisMonth, 600)}
          </div>
        </div>

        <!-- Improvement Summary -->
        <div class="improvement-summary">
          <h3>Fortschritt im Vergleich zur Vorperiode</h3>
          <div class="improvement-grid">
            ${this.renderImprovementItem('WPM', comparison.change.wpm, comparison.change.wpmPercent)}
            ${this.renderImprovementItem('Genauigkeit', comparison.change.accuracy, comparison.change.accuracyPercent)}
            ${this.renderImprovementItem('Übungszeit', comparison.change.practiceMinutes, comparison.change.practicePercent, 'min')}
            ${this.renderImprovementItem('Lektionen', comparison.change.lessonsCompleted, 0, '')}
          </div>
        </div>
      </div>
    `;

    this.setupEventListeners();
  }

  private renderStatCard(title: string, value: string, subtitle: string, icon: string): string {
    return `
      <div class="stat-card">
        <div class="stat-icon">${this.getIcon(icon)}</div>
        <div class="stat-content">
          <div class="stat-value">${value}</div>
          <div class="stat-title">${title}</div>
          <div class="stat-subtitle">${subtitle}</div>
        </div>
      </div>
    `;
  }

  private renderChange(change: number, percent: number): string {
    if (change === 0) {
      return '<span class="change neutral">Keine Änderung</span>';
    }
    const isPositive = change > 0;
    const arrow = isPositive ? '↑' : '↓';
    const className = isPositive ? 'positive' : 'negative';
    return `<span class="change ${className}">${arrow} ${Math.abs(change)} (${percent > 0 ? '+' : ''}${percent}%)</span>`;
  }

  private renderComparisonBar(label1: string, value1: number, label2: string, value2: number, max: number): string {
    const percent1 = Math.min((value1 / max) * 100, 100);
    const percent2 = Math.min((value2 / max) * 100, 100);

    return `
      <div class="comparison-bars">
        <div class="comparison-bar-group">
          <div class="bar-label">${label1}</div>
          <div class="bar-container">
            <div class="bar current" style="width: ${percent1}%"></div>
          </div>
          <div class="bar-value">${value1}</div>
        </div>
        <div class="comparison-bar-group">
          <div class="bar-label">${label2}</div>
          <div class="bar-container">
            <div class="bar previous" style="width: ${percent2}%"></div>
          </div>
          <div class="bar-value">${value2}</div>
        </div>
      </div>
    `;
  }

  private renderWeeklyActivity(sessions: DailySession[]): string {
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const maxMinutes = Math.max(...sessions.map(s => s.totalMinutes), 30);

    return `
      <div class="weekly-activity">
        ${sessions.map(session => {
          const date = new Date(session.date);
          const dayName = days[date.getDay()];
          const heightPercent = Math.min((session.totalMinutes / maxMinutes) * 100, 100);
          const hasActivity = session.totalMinutes > 0;
          
          return `
            <div class="day-column">
              <div class="day-bar-container">
                <div class="day-bar ${hasActivity ? 'active' : ''}" style="height: ${heightPercent}%">
                  ${hasActivity ? `<span class="day-tooltip">${session.totalMinutes} min</span>` : ''}
                </div>
              </div>
              <div class="day-label">${dayName}</div>
              <div class="day-stats">
                ${hasActivity ? `
                  <span class="day-wpm">${session.averageWPM} WPM</span>
                  <span class="day-acc">${session.averageAccuracy}%</span>
                ` : '<span class="day-empty">-</span>'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  private renderTimeBar(label: string, current: number, goal: number): string {
    const percent = Math.min((current / goal) * 100, 100);
    const isComplete = current >= goal;

    return `
      <div class="time-bar-group">
        <div class="time-bar-header">
          <span class="time-bar-label">${label}</span>
          <span class="time-bar-value">${this.formatTime(current)} / ${this.formatTime(goal)}</span>
        </div>
        <div class="time-bar-container">
          <div class="time-bar ${isComplete ? 'complete' : ''}" style="width: ${percent}%"></div>
        </div>
      </div>
    `;
  }

  private renderImprovementItem(label: string, change: number, percent: number, unit: string = ''): string {
    const isPositive = change > 0;
    const isNegative = change < 0;
    const className = isPositive ? 'positive' : isNegative ? 'negative' : 'neutral';
    const arrow = isPositive ? '↑' : isNegative ? '↓' : '→';

    return `
      <div class="improvement-item ${className}">
        <div class="improvement-arrow">${arrow}</div>
        <div class="improvement-content">
          <div class="improvement-label">${label}</div>
          <div class="improvement-value">${change > 0 ? '+' : ''}${change}${unit}</div>
          ${percent !== 0 ? `<div class="improvement-percent">(${percent > 0 ? '+' : ''}${percent}%)</div>` : ''}
        </div>
      </div>
    `;
  }

  private formatTime(minutes: number): string {
    return progressTrackingService.formatTime(minutes);
  }

  private getIcon(name: string): string {
    const icons: Record<string, string> = {
      clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
      zap: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      target: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
      trophy: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    };
    return icons[name] || '';
  }

  private setupEventListeners(): void {
    const periodBtns = this.container.querySelectorAll('.period-btn');
    periodBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const period = target.dataset.period as 'week' | 'month' | 'allTime';
        if (period) {
          this.currentPeriod = period;
          this.render();
        }
      });
    });
  }

  refresh(): void {
    this.render();
  }

  destroy(): void {
    this.container.innerHTML = '';
  }
}

// CSS styles for the component
export const performanceChartsStyles = `
  .performance-charts {
    padding: 1rem;
  }

  .period-selector {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }

  .period-btn {
    padding: 0.5rem 1.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .period-btn:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
  }

  .period-btn.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .stat-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    background: var(--primary-alpha);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-primary);
  }

  .stat-title {
    font-size: 0.875rem;
    color: var(--text-muted);
  }

  .stat-subtitle {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .change.positive { color: #22c55e; }
  .change.negative { color: #ef4444; }
  .change.neutral { color: var(--text-muted); }

  .charts-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .chart-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem;
  }

  .chart-card.full-width {
    grid-column: 1 / -1;
  }

  .chart-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .comparison-bars {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .comparison-bar-group {
    display: grid;
    grid-template-columns: 60px 1fr 50px;
    align-items: center;
    gap: 0.75rem;
  }

  .bar-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .bar-container {
    height: 24px;
    background: var(--bg-tertiary);
    border-radius: 6px;
    overflow: hidden;
  }

  .bar {
    height: 100%;
    border-radius: 6px;
    transition: width 0.5s ease;
  }

  .bar.current {
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
  }

  .bar.previous {
    background: linear-gradient(90deg, #6b7280, #9ca3af);
  }

  .bar-value {
    font-size: 0.875rem;
    font-weight: 600;
    text-align: right;
    color: var(--text-primary);
  }

  .weekly-activity {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 1rem;
  }

  .day-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .day-bar-container {
    height: 100px;
    width: 100%;
    max-width: 40px;
    background: var(--bg-tertiary);
    border-radius: 6px;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .day-bar {
    width: 100%;
    background: var(--bg-tertiary);
    border-radius: 6px;
    transition: height 0.3s ease;
    position: relative;
  }

  .day-bar.active {
    background: linear-gradient(180deg, #3b82f6, #1d4ed8);
  }

  .day-tooltip {
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .day-bar:hover .day-tooltip {
    opacity: 1;
  }

  .day-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-weight: 500;
  }

  .day-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .day-wpm, .day-acc {
    font-size: 0.625rem;
    color: var(--text-muted);
  }

  .day-empty {
    color: var(--text-muted);
    font-size: 0.75rem;
  }

  .time-stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .time-bar-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .time-bar-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }

  .time-bar-label {
    color: var(--text-secondary);
  }

  .time-bar-value {
    color: var(--text-primary);
    font-weight: 500;
  }

  .time-bar-container {
    height: 12px;
    background: var(--bg-tertiary);
    border-radius: 6px;
    overflow: hidden;
  }

  .time-bar {
    height: 100%;
    background: linear-gradient(90deg, #f59e0b, #fbbf24);
    border-radius: 6px;
    transition: width 0.5s ease;
  }

  .time-bar.complete {
    background: linear-gradient(90deg, #22c55e, #4ade80);
  }

  .improvement-summary {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.25rem;
    margin-top: 1.5rem;
  }

  .improvement-summary h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .improvement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  .improvement-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 8px;
    background: var(--bg-tertiary);
  }

  .improvement-item.positive {
    background: rgba(34, 197, 94, 0.1);
  }

  .improvement-item.negative {
    background: rgba(239, 68, 68, 0.1);
  }

  .improvement-arrow {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .improvement-item.positive .improvement-arrow {
    color: #22c55e;
  }

  .improvement-item.negative .improvement-arrow {
    color: #ef4444;
  }

  .improvement-item.neutral .improvement-arrow {
    color: var(--text-muted);
  }

  .improvement-label {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .improvement-value {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .improvement-percent {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }
`;