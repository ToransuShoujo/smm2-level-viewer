/* eslint-env browser */

const Gizmo = require('./gizmo');

class BillBlaster extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.gizmos.bill_blaster;
  }

  draw() {

    for (let y = 0; y < this.data.dimensions.height; y++) {
      if (y < this.data.dimensions.height - 2) {
        if ((this.data.flags & 0x4) == 0x4) {
          this.spriteOffset = this.scene.spriteSheetData.gizmos.bill_blaster.bulls_eye.body;
        } else {
          this.spriteOffset = this.scene.spriteSheetData.gizmos.bill_blaster.default.body;
        }
      } else if (y == this.data.dimensions.height - 2) {
        if ((this.data.flags & 0x4) == 0x4) {
          this.spriteOffset = this.scene.spriteSheetData.gizmos.bill_blaster.bulls_eye.head;
        } else {
          this.spriteOffset = this.scene.spriteSheetData.gizmos.bill_blaster.default.head;
        }
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

module.exports = BillBlaster;
