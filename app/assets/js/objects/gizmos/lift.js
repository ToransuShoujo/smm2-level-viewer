/* eslint-env browser */

const Gizmo = require('./gizmo');

class Lift extends Gizmo {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffsets = this.scene.spriteSheetData.gizmos.lift;

		if ((this.data.flags & 0x4) == 0x4) {
		this.spriteOffsets = this.spriteOffsets.flimsy;
	} else {
		this.spriteOffsets = this.spriteOffsets.default;
	}

}

	draw() {
		for (let x = 0; x < this.data.dimensions.width; x++) {
			let offset;
			if (x === 0) {
				offset = this.spriteOffsets.left;
			} else if (x === this.data.dimensions.width - 1) {
				offset = this.spriteOffsets.right;
			} else {
				offset = this.spriteOffsets.center;
			}

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				offset.x,
				offset.y,
				offset.width,
				offset.height,
				this.data.position.x + x,
				(this.scene.canvas.height - this.data.position.y),
				1, 1
			);
		}
	}
}

module.exports = Lift;
