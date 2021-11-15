/* eslint-env browser */

const Gizmo = require('./gizmo');

class DottedLineBlock extends Gizmo {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
		this.spriteOffset = this.scene.spriteSheetData.gizmos.dotted_line_block;

		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.spriteOffset.on;
		} else {
			this.spriteOffset = this.spriteOffset.off;
		}
	}

	draw() {
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteSheetThemeOffset.x + this.spriteOffset.x,
			this.spriteSheetThemeOffset.y + this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x,
			(this.scene.canvas.height - this.data.position.y),
			this.data.dimensions.width,
			this.data.dimensions.height
		);
	}
}

module.exports = DottedLineBlock;
