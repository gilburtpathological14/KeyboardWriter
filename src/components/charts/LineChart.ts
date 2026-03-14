/**
 * Simple Canvas-based Line Chart Component
 * Displays WPM/Accuracy over time
 */

export interface ChartDataPoint {
  label: string;
  value: number;
  timestamp: number;
}

export interface LineChartOptions {
  width?: number;
  height?: number;
  lineColor?: string;
  fillColor?: string;
  gridColor?: string;
  textColor?: string;
  showDots?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  minValue?: number;
  maxValue?: number;
  yAxisLabel?: string;
}

const DEFAULT_OPTIONS: LineChartOptions = {
  width: 600,
  height: 250,
  lineColor: '#58a6ff',
  fillColor: 'rgba(88, 166, 255, 0.1)',
  gridColor: 'rgba(255, 255, 255, 0.1)',
  textColor: '#8b949e',
  showDots: true,
  showGrid: true,
  showLabels: true,
  minValue: 0,
  yAxisLabel: '',
};

export class LineChart {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly options: LineChartOptions;
  private data: ChartDataPoint[] = [];
  private readonly padding = { top: 30, right: 20, bottom: 40, left: 50 };

  constructor(containerId: string, options: LineChartOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };

    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container ${containerId} not found`);
    }

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.options.width!;
    this.canvas.height = this.options.height!;
    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';

    const ctx = this.canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }
    this.ctx = ctx;

    container.innerHTML = '';
    container.appendChild(this.canvas);

    // Setup hover tooltip
    this.setupTooltip();
  }

  /**
   * Set chart data
   */
  setData(data: ChartDataPoint[]): void {
    this.data = data;
    this.render();
  }

  /**
   * Render the chart
   */
  render(): void {
    const { width, height } = this.options;
    const { ctx, data, padding } = this;

    // Clear canvas
    ctx.clearRect(0, 0, width!, height!);

    if (data.length === 0) {
      this.renderEmptyState();
      return;
    }

    const chartWidth = width! - padding.left - padding.right;
    const chartHeight = height! - padding.top - padding.bottom;

    // Calculate min/max values
    const values = data.map(d => d.value);
    const minValue = this.options.minValue ?? Math.min(...values);
    const maxValue = this.options.maxValue ?? Math.max(...values) * 1.1;
    const valueRange = maxValue - minValue || 1;

    // Draw grid
    if (this.options.showGrid) {
      this.drawGrid(chartWidth, chartHeight, minValue, maxValue);
    }

    // Calculate points
    const points = data.map((d, i) => ({
      x: padding.left + (i / (data.length - 1 || 1)) * chartWidth,
      y: padding.top + chartHeight - ((d.value - minValue) / valueRange) * chartHeight,
      data: d,
    }));

    // Draw filled area
    if (this.options.fillColor) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, padding.top + chartHeight);
      points.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(points[points.length - 1].x, padding.top + chartHeight);
      ctx.closePath();
      ctx.fillStyle = this.options.fillColor;
      ctx.fill();
    }

    // Draw line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((p, i) => {
      if (i > 0) {
        // Smooth curve
        const prevPoint = points[i - 1];
        const cpX = (prevPoint.x + p.x) / 2;
        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpX, (prevPoint.y + p.y) / 2);
        ctx.quadraticCurveTo(cpX, (prevPoint.y + p.y) / 2, p.x, p.y);
      }
    });
    ctx.strokeStyle = this.options.lineColor!;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw dots
    if (this.options.showDots) {
      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.options.lineColor!;
        ctx.fill();
        ctx.strokeStyle = '#0d1117';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    // Draw labels
    if (this.options.showLabels) {
      this.drawLabels(points, chartWidth);
    }

    // Draw Y-axis label
    if (this.options.yAxisLabel) {
      ctx.save();
      ctx.translate(15, height! / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.fillStyle = this.options.textColor!;
      ctx.font = '12px sans-serif';
      ctx.fillText(this.options.yAxisLabel, 0, 0);
      ctx.restore();
    }
  }

  /**
   * Draw grid lines
   */
  private drawGrid(
    chartWidth: number,
    chartHeight: number,
    minValue: number,
    maxValue: number
  ): void {
    const { ctx, padding } = this;
    const gridLines = 5;

    ctx.strokeStyle = this.options.gridColor!;
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    for (let i = 0; i <= gridLines; i++) {
      const y = padding.top + (i / gridLines) * chartHeight;
      const value = maxValue - (i / gridLines) * (maxValue - minValue);

      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartWidth, y);
      ctx.stroke();

      // Y-axis labels
      ctx.fillStyle = this.options.textColor!;
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(value).toString(), padding.left - 8, y + 4);
    }

    ctx.setLineDash([]);
  }

  /**
   * Draw X-axis labels
   */
  private drawLabels(
    points: { x: number; y: number; data: ChartDataPoint }[],
    _chartWidth: number
  ): void {
    const { ctx, padding, options } = this;

    ctx.fillStyle = options.textColor!;
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';

    // Show only a subset of labels to avoid overcrowding
    const maxLabels = 10;
    const step = Math.ceil(points.length / maxLabels);

    points.forEach((p, i) => {
      if (i % step === 0 || i === points.length - 1) {
        ctx.fillText(p.data.label, p.x, options.height! - padding.bottom + 20);
      }
    });
  }

  /**
   * Render empty state
   */
  private renderEmptyState(): void {
    const { ctx, options } = this;

    ctx.fillStyle = this.options.textColor!;
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Noch keine Daten vorhanden', options.width! / 2, options.height! / 2);
    ctx.font = '12px sans-serif';
    ctx.fillText(
      'Starte eine Übung, um deinen Fortschritt zu sehen!',
      options.width! / 2,
      options.height! / 2 + 24
    );
  }

  /**
   * Setup tooltip on hover
   */
  private setupTooltip(): void {
    let tooltip: HTMLDivElement | null = null;

    this.canvas.addEventListener('mousemove', e => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const x = (e.clientX - rect.left) * scaleX;

      if (this.data.length === 0) {
        return;
      }

      const chartWidth = this.options.width! - this.padding.left - this.padding.right;
      const relX = x - this.padding.left;
      const index = Math.round((relX / chartWidth) * (this.data.length - 1));

      if (index >= 0 && index < this.data.length) {
        const point = this.data[index];

        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.style.cssText = `
            position: fixed;
            background: var(--bg-secondary);
            border: 1px solid var(--border-primary);
            border-radius: 6px;
            padding: 8px 12px;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          `;
          document.body.appendChild(tooltip);
        }

        tooltip.innerHTML = `
          <div style="font-weight: bold; color: var(--text-primary);">${point.value} ${this.options.yAxisLabel ?? ''}</div>
          <div style="color: var(--text-muted);">${point.label}</div>
        `;
        tooltip.style.left = `${e.clientX + 12}px`;
        tooltip.style.top = `${e.clientY - 12}px`;
        tooltip.style.display = 'block';
      }
    });

    this.canvas.addEventListener('mouseleave', () => {
      if (tooltip) {
        tooltip.style.display = 'none';
      }
    });
  }

  /**
   * Destroy the chart
   */
  destroy(): void {
    this.canvas.remove();
  }
}
