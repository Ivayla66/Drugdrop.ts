import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Fruit extends ScoreItem {
  private speed: number = 0.15;

  public constructor(maxX: number) {
    super();
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('assets/lean.png');
      this.score = 10;
    } else if (random > 0.7) {
      this.image = CanvasRenderer.loadNewImage('assets/xanax-png-2.png');
      this.score = 7;
    } else if (random > 0.4) {
      this.image = CanvasRenderer.loadNewImage('assets/weed bud 1.png');
      this.score = 5;
    } else if (random > 0.2) {
      this.image = CanvasRenderer.loadNewImage('assets/tesla pill.png (1).png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('assets/xanax-png-2.png');
      this.score = 1;
    }
    this.posX = (Math.random() * maxX);
    this.posY = -32;
  }

  /**
   * Update the position of the fruit. The fruit will start accelerating.
   *
   * @param elapsed elapsed time from the game
   */
  public override update(elapsed: number): void {
    this.posY += elapsed * this.speed;
    this.speed *= 1.0003 ** elapsed;
  }
}
