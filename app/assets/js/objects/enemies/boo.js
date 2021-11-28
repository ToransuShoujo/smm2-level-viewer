/* eslint-env browser */

const Enemy = require('./enemy');

class Boo extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.boo;
  }


//TODO: figure out how to check tile below to see if stretch or not.

  draw() {

    let offset = this.spriteOffset.default;
    if ((this.data.flags & 0x4) == 0x4) {
      offset = this.spriteOffset.ring
    }

    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      offset.x,
      offset.y,
      offset.width,
      offset.height,
      this.data.position.x,
      (this.scene.canvas.height - this.data.position.y),
      this.data.dimensions.width,
      this.data.dimensions.height
    );
  }
}

module.exports = Boo;
