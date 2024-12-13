import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Player {
  private posX: number;

  private posY: number;

  private image: HTMLImageElement;

  private maxX: number;

  private speed: number = 0.4;

  private isMovingLeft: boolean = false;

  private isMovingRight: boolean = false;

  public constructor(canvasWidth: number, canvasHeight: number) {
    this.image = CanvasRenderer.loadNewImage('assets/drug bag-Photoroom.png');
    this.posX = canvasWidth / 2;
    this.posY = canvasHeight - 250;
    this.maxX = canvasWidth;
  }

  /**
   * Test whether the score Item collides with the player
   *
   * @param item The score item to test for
   * @returns true if the fruit has indeed collided.
   */
  public itemCollided(item: ScoreItem): boolean {
    return (item.getPosX() + item.getWidth() > this.posX
      && item.getPosX() < this.posX + this.image.width
      && item.getPosY() + item.getHeight() > this.posY
      && item.getPosY() < this.posY + this.image.height);
  }

  /**
   * Sets a flag that the player is going to move left
   */
  public moveLeft(): void {
    this.isMovingLeft = true;
  }

  /**
   * Sets a flag that the player is going to move right
   */
  public moveRight(): void {
    this.isMovingRight = true;
  }

  /**
   * Update the position of the player. If the the movingLEft or movingRight
   * flag has been set, the player will move accordingly.
   * @param elapsed the number of ms that has passed since the last update
   */
  public update(elapsed: number): void {
    if (this.isMovingLeft) {
      this.posX -= this.speed * elapsed;
      if (this.posX < 0) {
        this.posX = 0;
      }
      this.isMovingLeft = false;
    }
    if (this.isMovingRight) {
      this.posX += this.speed * elapsed;
      if (this.posX + (this.image.width) > this.maxX) {
        this.posX = this.maxX - (this.image.width);
      }
      this.isMovingRight = false;
    }
  }

  /**
   * Render the GameItem to the canvas
   *
   * @param canvas canvas to render the GameItem to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
