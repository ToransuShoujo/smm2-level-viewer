/* eslint-env browser */

const Gizmo = require('./gizmo');

class Burner extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.gizmos.burner.base;
  }

  // Implemented burner variants, but not rotation.
  draw() {

    for (let y = 0; y < this.data.dimensions.height; y++) {
      if (y == 0) {
        this.spriteOffset = this.spriteOffset;
      } else if ((y == 1) && ((this.data.flags & 0x4) == 0x4)) {
        this.spriteOffset = this.scene.spriteSheetData.gizmos.burner.aleternate_fire;
      } else if (y == 1) {
        this.spriteOffset = this.scene.spriteSheetData.gizmos.burner.fire;
      } else {
        this.spriteOffset = this.scene.spriteSheetData.other.blank_tile;
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

module.exports = Burner;
