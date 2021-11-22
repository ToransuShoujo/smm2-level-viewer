/* eslint-env browser */

const Gizmo = require('./gizmo');

class Cannon extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.gizmos.cannon;
  }

  draw() {

    if ((this.data.flags & 0x4) == 0x4) {
      this.spriteOffset = this.scene.spriteSheetData.gizmos.cannon.red;
    } else {
      this.spriteOffset = this.scene.spriteSheetData.gizmos.cannon.default;
    }

    // Draw base
    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      this.spriteOffset.base.x,
      this.spriteOffset.base.y,
      this.spriteOffset.base.width,
      this.spriteOffset.base.height,
      this.data.position.x,
      (this.scene.canvas.height - this.data.position.y),
      this.data.dimensions.width,
      this.data.dimensions.height
    );

    // Draw cannon
    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      this.spriteOffset.cannon.x,
      this.spriteOffset.cannon.y,
      this.spriteOffset.cannon.width,
      this.spriteOffset.cannon.height,
      this.data.position.x,
      (this.scene.canvas.height - this.data.position.y),
      this.data.dimensions.width,
      this.data.dimensions.height
    );
  }
}

module.exports = Cannon;
