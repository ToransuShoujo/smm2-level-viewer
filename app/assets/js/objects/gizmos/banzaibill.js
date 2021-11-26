/* eslint-env browser */

const Gizmo = require('./gizmo');

class BanzaiBill extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;

    if ((this.data.flags & 0x4) == 0x4) {
      this.spriteOffset = this.scene.spriteSheetData.gizmos.banzai_bill.bulls_eye;
    } else {
		this.spriteOffset = this.scene.spriteSheetData.gizmos.banzai_bill.default;
	}
  }

  draw() {
    
    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      this.spriteOffset.x,
      this.spriteOffset.y,
      this.spriteOffset.width,
      this.spriteOffset.height,
      this.data.position.x - 1.5,
      (this.scene.canvas.height - this.data.position.y) - 3,
      this.data.dimensions.width,
      this.data.dimensions.height
    );
  }
}

module.exports = BanzaiBill;
