/**
 * Confetti Service
 * Creates celebratory particle animations for achievements
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'square' | 'circle' | 'triangle' | 'star';
  opacity: number;
  life: number;
}

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  colors?: string[];
  gravity?: number;
  duration?: number;
  origin?: { x: number; y: number };
}

const DEFAULT_COLORS = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#ff00ff',
  '#00ffff',
  '#ff8800',
  '#88ff00',
  '#0088ff',
  '#ff0088',
  '#8800ff',
  '#00ff88',
];

class ConfettiServiceClass {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private animationId: number | null = null;
  private isActive: boolean = false;

  /**
   * Initialize the confetti canvas
   */
  private initCanvas(): void {
    if (this.canvas) {
      return;
    }

    this.canvas = document.createElement('canvas');
    this.canvas.id = 'confetti-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 99999;
    `;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();

    window.addEventListener('resize', () => this.resizeCanvas());
  }

  /**
   * Resize canvas to match window
   */
  private resizeCanvas(): void {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  /**
   * Create a single particle
   */
  private createParticle(options: ConfettiOptions): Particle {
    const colors = options.colors || DEFAULT_COLORS;
    const spread = options.spread || 70;
    const startVelocity = options.startVelocity || 45;
    const origin = options.origin || { x: 0.5, y: 0.5 };

    const angle = (Math.random() * spread - spread / 2) * (Math.PI / 180);
    const velocity = startVelocity * (0.5 + Math.random() * 0.5);

    const shapes: Particle['shape'][] = ['square', 'circle', 'triangle', 'star'];

    return {
      x: origin.x * (this.canvas?.width || window.innerWidth),
      y: origin.y * (this.canvas?.height || window.innerHeight),
      vx: Math.sin(angle) * velocity * (Math.random() > 0.5 ? 1 : -1),
      vy: -Math.cos(angle) * velocity - Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      opacity: 1,
      life: 1,
    };
  }

  /**
   * Draw a single particle
   */
  private drawParticle(particle: Particle): void {
    if (!this.ctx) {
      return;
    }

    this.ctx.save();
    this.ctx.translate(particle.x, particle.y);
    this.ctx.rotate((particle.rotation * Math.PI) / 180);
    this.ctx.globalAlpha = particle.opacity;
    this.ctx.fillStyle = particle.color;

    const size = particle.size;

    switch (particle.shape) {
      case 'square':
        this.ctx.fillRect(-size / 2, -size / 2, size, size);
        break;
      case 'circle':
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
        this.ctx.fill();
        break;
      case 'triangle':
        this.ctx.beginPath();
        this.ctx.moveTo(0, -size / 2);
        this.ctx.lineTo(size / 2, size / 2);
        this.ctx.lineTo(-size / 2, size / 2);
        this.ctx.closePath();
        this.ctx.fill();
        break;
      case 'star':
        this.drawStar(0, 0, 5, size / 2, size / 4);
        break;
    }

    this.ctx.restore();
  }

  /**
   * Draw a star shape
   */
  private drawStar(
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number
  ): void {
    if (!this.ctx) {
      return;
    }

    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.ctx.lineTo(x, y);
      rot += step;
    }

    this.ctx.lineTo(cx, cy - outerRadius);
    this.ctx.closePath();
    this.ctx.fill();
  }

  /**
   * Update particle physics
   */
  private updateParticle(particle: Particle, gravity: number): void {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += gravity;
    particle.vx *= 0.99;
    particle.rotation += particle.rotationSpeed;
    particle.life -= 0.01;
    particle.opacity = particle.life;
  }

  /**
   * Animation loop
   */
  private animate(gravity: number): void {
    if (!this.ctx || !this.canvas) {
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = this.particles.filter(p => {
      this.updateParticle(p, gravity);
      if (p.life > 0 && p.y < this.canvas!.height + 50) {
        this.drawParticle(p);
        return true;
      }
      return false;
    });

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.animate(gravity));
    } else {
      this.cleanup();
    }
  }

  /**
   * Cleanup after animation
   */
  private cleanup(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.isActive = false;
  }

  /**
   * Fire confetti burst
   */
  fire(options: ConfettiOptions = {}): void {
    this.initCanvas();

    const particleCount = options.particleCount || 100;
    const gravity = options.gravity || 0.5;

    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle(options));
    }

    if (!this.isActive) {
      this.isActive = true;
      this.animate(gravity);
    }
  }

  /**
   * Fire confetti from bottom center (celebration)
   */
  celebrate(intensity: 'small' | 'medium' | 'large' = 'medium'): void {
    const counts = { small: 50, medium: 100, large: 200 };

    this.fire({
      particleCount: counts[intensity],
      spread: 90,
      startVelocity: 50,
      origin: { x: 0.5, y: 1 },
    });
  }

  /**
   * Fire confetti from both sides (big celebration)
   */
  bigCelebrate(): void {
    // Left side
    this.fire({
      particleCount: 75,
      spread: 60,
      startVelocity: 55,
      origin: { x: 0, y: 0.8 },
    });

    // Right side
    setTimeout(() => {
      this.fire({
        particleCount: 75,
        spread: 60,
        startVelocity: 55,
        origin: { x: 1, y: 0.8 },
      });
    }, 150);

    // Center
    setTimeout(() => {
      this.fire({
        particleCount: 100,
        spread: 90,
        startVelocity: 60,
        origin: { x: 0.5, y: 0.9 },
      });
    }, 300);
  }

  /**
   * Fire confetti at a specific element
   */
  fireAtElement(element: HTMLElement, options: ConfettiOptions = {}): void {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    this.fire({
      ...options,
      origin: { x, y },
      particleCount: options.particleCount || 30,
      spread: options.spread || 50,
      startVelocity: options.startVelocity || 25,
    });
  }

  /**
   * Continuous confetti rain (for special events)
   */
  startRain(duration: number = 5000): void {
    const interval = setInterval(() => {
      this.fire({
        particleCount: 10,
        spread: 180,
        startVelocity: 10,
        gravity: 0.3,
        origin: { x: Math.random(), y: 0 },
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, duration);
  }

  /**
   * Achievement celebration (gold confetti)
   */
  achievement(): void {
    this.fire({
      particleCount: 80,
      spread: 70,
      startVelocity: 40,
      colors: ['#ffd700', '#ffb700', '#ff9500', '#ffffff', '#ffea00'],
      origin: { x: 0.5, y: 0.6 },
    });
  }

  /**
   * Level up celebration (rainbow)
   */
  levelUp(): void {
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

    this.fire({
      particleCount: 120,
      spread: 100,
      startVelocity: 55,
      colors,
      origin: { x: 0.5, y: 0.7 },
    });
  }

  /**
   * Perfect score celebration
   */
  perfectScore(): void {
    // Gold burst
    this.fire({
      particleCount: 50,
      spread: 60,
      colors: ['#ffd700', '#ffea00'],
      origin: { x: 0.5, y: 0.5 },
      startVelocity: 35,
    });

    // Delayed rainbow explosion
    setTimeout(() => {
      this.bigCelebrate();
    }, 200);
  }

  /**
   * Destroy the service
   */
  destroy(): void {
    this.cleanup();
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.canvas = null;
    this.ctx = null;
  }
}

// Export singleton instance
export const ConfettiService = new ConfettiServiceClass();
