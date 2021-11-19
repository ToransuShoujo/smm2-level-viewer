/* eslint-env browser */

const Enemy = require('./enemy');

class Spike extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.spike.default;
  }

  draw() {

    if ((this.data.flags & 0x4) == 0x4) {
      if (this.scene.theme == 'snow') {
        this.spriteOffset = this.scene.spriteSheetData.enemies.spike.snowball;
      } else {
        this.spriteOffset = this.scene.spriteSheetData.enemies.spile.spike_ball;
      }
    }

    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      this.spriteOffset.x,
      this.spriteOffset.y,
      this.spriteOffset.width,
      this.spriteOffset.height,
      this.data.position.x,
      (this.scene.canvas.height - this.data.position.y),
      this.data.dimensions.width,
      this.data.dimensions.height
    );
  }
}

module.exports = Spike;
