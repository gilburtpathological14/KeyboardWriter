import { KeyboardHeatmap, KeyStats } from '../components/charts/KeyboardHeatmap';
import { ChartDataPoint, LineChart } from '../components/charts/LineChart';
import { Store, t } from '../core';
import { formatPracticeTime } from '../domain/models';

/**
 * Statistics Page Controller
 * Displays user statistics, charts, and progress data
 */
export class StatisticsPage {
  private wpmChart: LineChart | null = null;
  private accuracyChart: LineChart | null = null;
  private keyboardHeatmap: KeyboardHeatmap | null = null;

  constructor() {
    // Charts will be initialized in init()
  }

  /**
   * Render the statistics page
   */
  render(): string {
    const state = Store.getState();
    const stats = state.user.statistics;

    return `
      <div class="typing-container">
        <h1 style="margin-bottom: var(--space-6);">${t('stats.title')}</h1>

        ${this.renderOverviewCards(stats)}
        ${this.renderProgressSection(stats)}
        ${this.renderChartsSection()}
        ${this.renderWeeklyActivity(stats)}
        ${this.renderHeatmapSection()}
      </div>
    `;
  }

  /**
   * Render overview cards
   */
  private renderOverviewCards(stats: {
    averageWPM: number;
    peakWPM: number;
    averageAccuracy: number;
    totalSessions: number;
    totalPracticeTimeMs: number;
    totalKeystrokes: number;
    totalLessonsCompleted: number;
    currentStreak: number;
    longestStreak: number;
  }): string {
    return `
      <div class="stats-panel" style="margin-bottom: var(--space-8);">
        <div class="stat-card">
          <span class="stat-card-value">${stats.averageWPM}</span>
          <span class="stat-card-label">${t('stats.avgWpm')}</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${stats.peakWPM}</span>
          <span class="stat-card-label">${t('stats.peakWpm')}</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${stats.averageAccuracy}%</span>
          <span class="stat-card-label">${t('stats.accuracy')}</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${stats.currentStreak}</span>
          <span class="stat-card-label">${t('stats.dayStreak')}</span>
        </div>
      </div>
    `;
  }

  /**
   * Render progress section
   */
  private renderProgressSection(stats: {
    totalSessions: number;
    totalPracticeTimeMs: number;
    totalKeystrokes: number;
    totalLessonsCompleted: number;
    longestStreak: number;
  }): string {
    return `
      <div class="card" style="margin-bottom: var(--space-6);">
        <h3 style="margin-bottom: var(--space-4);">${t('stats.progress')}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--space-4);">
          <div class="progress-stat">
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--text-primary); font-family: var(--font-mono);">
              ${stats.totalSessions}
            </div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t('stats.sessions')}</div>
          </div>
          <div class="progress-stat">
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--text-primary); font-family: var(--font-mono);">
              ${formatPracticeTime(stats.totalPracticeTimeMs)}
            </div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t('stats.practiceTime')}</div>
          </div>
          <div class="progress-stat">
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--text-primary); font-family: var(--font-mono);">
              ${this.formatNumber(stats.totalKeystrokes)}
            </div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t('stats.keystrokes')}</div>
          </div>
          <div class="progress-stat">
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--text-primary); font-family: var(--font-mono);">
              ${stats.totalLessonsCompleted}
            </div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t('stats.lessons')}</div>
          </div>
          <div class="progress-stat">
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--text-primary); font-family: var(--font-mono);">
              ${stats.longestStreak}
            </div>
            <div style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t('stats.longestStreak')}</div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render charts section with canvas-based charts
   */
  private renderChartsSection(): string {
    return `
      <div class="charts-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-bottom: var(--space-6);">
        <div class="card">
          <h3 style="margin-bottom: var(--space-4);">${t('stats.wpmHistory')}</h3>
          <div id="wpm-chart-container" style="width: 100%; min-height: 250px;"></div>
        </div>
        <div class="card">
          <h3 style="margin-bottom: var(--space-4);">${t('stats.accuracyHistory')}</h3>
          <div id="accuracy-chart-container" style="width: 100%; min-height: 250px;"></div>
        </div>
      </div>
    `;
  }

  /**
   * Render keyboard heatmap section
   */
  private renderHeatmapSection(): string {
    return `
      <div class="card">
        <h3 style="margin-bottom: var(--space-4);">${t('stats.keyboardHeatmap')}</h3>
        <p style="color: var(--text-muted); font-size: 13px; margin-bottom: var(--space-4);">
          ${t('stats.heatmapDescription')}
        </p>
        <div id="keyboard-heatmap-container"></div>
      </div>
    `;
  }

  /**
   * Render weekly activity heatmap
   */
  private renderWeeklyActivity(stats: {
    dailyStats: { date: string; practiceTimeMs: number }[];
  }): string {
    const days = [
      t('days.mon'),
      t('days.tue'),
      t('days.wed'),
      t('days.thu'),
      t('days.fri'),
      t('days.sat'),
      t('days.sun'),
    ];
    const today = new Date();
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });

    const activityMap = new Map(stats.dailyStats.map(d => [d.date, d.practiceTimeMs]));

    return `
      <div class="card" style="margin-bottom: var(--space-6);">
        <h3 style="margin-bottom: var(--space-4);">${t('stats.weeklyActivity')}</h3>
        <div style="display: flex; gap: var(--space-2); justify-content: space-between;">
          ${last7Days
            .map((date, i) => {
              const activity = activityMap.get(date) ?? 0;
              const intensity = activity > 0 ? Math.min(Math.floor(activity / 300000) + 1, 4) : 0;
              const colors = [
                'var(--bg-tertiary)',
                'rgba(88, 166, 255, 0.3)',
                'rgba(88, 166, 255, 0.5)',
                'rgba(88, 166, 255, 0.7)',
                'var(--accent-primary)',
              ];

              return `
              <div style="flex: 1; text-align: center;">
                <div style="
                  height: 40px;
                  background: ${colors[intensity]};
                  border-radius: var(--radius-md);
                  margin-bottom: var(--space-2);
                " title="${date}: ${formatPracticeTime(activity)}"></div>
                <span style="font-size: var(--font-size-xs); color: var(--text-muted);">${days[i]}</span>
              </div>
            `;
            })
            .join('')}
        </div>
        <div style="display: flex; align-items: center; gap: var(--space-2); margin-top: var(--space-4); justify-content: flex-end;">
          <span style="font-size: var(--font-size-xs); color: var(--text-muted);">${t('stats.less')}</span>
          ${[0, 1, 2, 3, 4]
            .map(
              i => `
            <div style="
              width: 16px;
              height: 16px;
              background: ${
                [
                  'var(--bg-tertiary)',
                  'rgba(88, 166, 255, 0.3)',
                  'rgba(88, 166, 255, 0.5)',
                  'rgba(88, 166, 255, 0.7)',
                  'var(--accent-primary)',
                ][i]
              };
              border-radius: var(--radius-sm);
            "></div>
          `
            )
            .join('')}
          <span style="font-size: var(--font-size-xs); color: var(--text-muted);">${t('stats.more')}</span>
        </div>
      </div>
    `;
  }

  /**
   * Format large numbers with K/M suffix
   */
  private formatNumber(num: number): string {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return String(num);
  }

  /**
   * Initialize the page
   */
  init(): void {
    const state = Store.getState();
    const stats = state.user.statistics;

    // Initialize WPM chart
    setTimeout(() => {
      this.initWpmChart(stats);
      this.initAccuracyChart(stats);
      this.initKeyboardHeatmap(stats);
    }, 0);
  }

  /**
   * Initialize WPM chart
   */
  private initWpmChart(stats: { wpmHistory: { timestamp: number; wpm: number }[] }): void {
    try {
      this.wpmChart = new LineChart('wpm-chart-container', {
        lineColor: '#58a6ff',
        fillColor: 'rgba(88, 166, 255, 0.1)',
        yAxisLabel: 'WPM',
        minValue: 0,
      });

      const chartData: ChartDataPoint[] = stats.wpmHistory.slice(-30).map((d, i) => ({
        label: `#${i + 1}`,
        value: d.wpm,
        timestamp: d.timestamp,
      }));

      this.wpmChart.setData(chartData);
    } catch (e) {
      console.error('Failed to initialize WPM chart:', e);
    }
  }

  /**
   * Initialize accuracy chart
   */
  private initAccuracyChart(stats: {
    accuracyHistory: { timestamp: number; accuracy: number }[];
  }): void {
    try {
      this.accuracyChart = new LineChart('accuracy-chart-container', {
        lineColor: '#3fb950',
        fillColor: 'rgba(63, 185, 80, 0.1)',
        yAxisLabel: '%',
        minValue: 0,
        maxValue: 100,
      });

      const chartData: ChartDataPoint[] = stats.accuracyHistory.slice(-30).map((d, i) => ({
        label: `#${i + 1}`,
        value: d.accuracy,
        timestamp: d.timestamp,
      }));

      this.accuracyChart.setData(chartData);
    } catch (e) {
      console.error('Failed to initialize accuracy chart:', e);
    }
  }

  /**
   * Initialize keyboard heatmap
   */
  private initKeyboardHeatmap(stats: {
    keyStats: Map<string, { key: string; errorRate: number; totalAttempts: number }>;
  }): void {
    try {
      this.keyboardHeatmap = new KeyboardHeatmap('keyboard-heatmap-container');

      // Convert keyStats to the format expected by KeyboardHeatmap
      const heatmapData = new Map<string, KeyStats>();
      stats.keyStats.forEach((value, key) => {
        heatmapData.set(key, {
          key: value.key,
          errorRate: value.errorRate,
          totalAttempts: value.totalAttempts,
        });
      });

      this.keyboardHeatmap.setData(heatmapData);
    } catch (e) {
      console.error('Failed to initialize keyboard heatmap:', e);
    }
  }

  /**
   * Destroy the page
   */
  destroy(): void {
    this.wpmChart?.destroy();
    this.accuracyChart?.destroy();
    this.keyboardHeatmap?.destroy();
    this.wpmChart = null;
    this.accuracyChart = null;
    this.keyboardHeatmap = null;
  }
}
