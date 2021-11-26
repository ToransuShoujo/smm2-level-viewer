/* eslint-env browser */

const Gizmo = require('./gizmo');

class Vine extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
		this.spriteOffsets = this.scene.spriteSheetData.gizmos.vine;
	}

	draw() {
		for (let y = 0; y < this.data.dimensions.height; y++) {
			let offset;
			if (y === 0) {
				offset = this.spriteOffsets.bottom;
			} else if (y === this.data.dimensions.height - 1) {
				offset = this.spriteOffsets.top;
			} else {
				offset = this.spriteOffsets.middle;
			}
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteSheetThemeOffset.x + offset.x,
				this.spriteSheetThemeOffset.y + offset.y,
				offset.width,
				offset.height,
				this.data.position.x,
				(this.scene.canvas.height - this.data.position.y - y),
				1,
				1
			);
		}
	}
}

module.exports = Vine;
