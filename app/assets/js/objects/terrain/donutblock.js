/* eslint-env browser */

const Terrain = require('./terrain');

class DonutBlock extends Terrain {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
		this.spriteOffset = this.scene.spriteSheetData.terrain.donut_block;
		this.drawPriority = 888;
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
		if ((this.data.flags & 0x2) == 0x2) {
			let modifierOffset;
			modifierOffset = this.scene.spriteSheetData.modifiers.twoWings;

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				modifierOffset.x,
				modifierOffset.y,
				modifierOffset.width,
				modifierOffset.height,
				this.data.position.x - 0.5,
				(this.scene.canvas.height - this.data.position.y),
				2, 1
			);
		}
	}
}

module.exports = DonutBlock;
