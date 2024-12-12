import CanvasRenderer from './CanvasRenderer.js';

export default abstract class ScoreItem {
  protected posX: number;

  protected posY: number;

  protected image: HTMLImageElement;

  protected score: number;

  public constructor() {
    this.posX = 0;
    this.posY = 0;
    this.score = 0;
    this.image = new Image();
  }

  public abstract update (elapsed: number): void;

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getWidth(): number {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    return this.image.width;
  }

  public getHeight(): number {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    return this.image.height;
  }

  public getScore(): number {
    return this.score;
  }

  /**
   * Render the GameItem to the canvas
   *
   * @param canvas canvas to render the GameItem to
   */
  public render(canvas: HTMLCanvasElement): void {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
