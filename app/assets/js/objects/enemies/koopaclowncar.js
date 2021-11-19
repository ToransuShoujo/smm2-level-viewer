/* eslint-env browser */

const Enemy = require('./enemy');

class KoopaClownCar extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.koopa_clown_car;
  }

  draw() {

    if ((this.data.flags & 0x4) == 0x4) {
      this.spriteOffset = this.spriteOffset.fire;
    } else {
      this.spriteOffset = this.spriteOffset.default;
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

module.exports = KoopaClownCar;
