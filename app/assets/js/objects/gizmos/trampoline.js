/* eslint-env browser */

const Gizmo = require('./gizmo');

class Trampoline extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.gizmos.trampoline.default;
  }

  draw() {

    if ((this.data.flags & 0x4) == 0x4) {
      this.spriteOffset = this.scene.spriteSheetData.gizmos.trampoline.sideways;
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

module.exports = Trampoline;
