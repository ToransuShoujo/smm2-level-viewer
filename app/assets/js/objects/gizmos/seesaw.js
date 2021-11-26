/* eslint-env browser */

const Gizmo = require('./gizmo');

class Seesaw extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffsets = this.scene.spriteSheetData.gizmos.seesaw;
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
				Math.round(this.data.position.x - this.data.dimensions.width/2) + x,
				(this.scene.canvas.height - this.data.position.y),
				1, 1
			);
		}
	}
}

module.exports = Seesaw;
