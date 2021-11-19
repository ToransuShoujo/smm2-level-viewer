/* eslint-env browser */

const Enemy = require('./enemy');

class Pokey extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.pokey;
  }

  draw() {

    for (let y = 0; y < this.data.dimensions.height; y++) {
      if (y !== this.data.dimensions.height - 1) {
        if ((this.data.flags & 0x4) == 0x4) {
          this.spriteOffset.snow.body;
        } else {
          this.spriteOffset.default.body;
        }
      } else {
        if ((this.data.flags & 0x4) == 0x4) {
          this.spriteOffset.snow.head;
        } else {
          this.spriteOffset.default.head;
        }
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

module.exports = Pokey;
