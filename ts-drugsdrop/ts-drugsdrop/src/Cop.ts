import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Spider extends ScoreItem {
  public constructor(maxX: number) {
    super();
    // Choose a random image for the spiders
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('assets/cuffs.png');
      this.score = -5;
    } else {
      this.image = CanvasRenderer.loadNewImage('assets/cop.png');
      this.score = -1;
    }
    this.posX = (Math.random() * maxX);
    this.posY = -32;
  }

  /**
   * Update position of spider.
   *
   * @param elapsed the elapsed time from the Game
   */
  public override update(elapsed: number): void {
    this.posY += elapsed * 0.1;
  }
}
