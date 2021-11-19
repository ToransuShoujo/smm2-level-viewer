/* eslint-env browser */

const Item = require('./item');

class Coin extends Item {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
		this.spriteOffset = this.scene.spriteSheetData.items.coin.default;
	}

	draw() {

		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.scene.spriteSheetData.items.coin.frozen;
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
			// Yep lmao
		} else {
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
}

module.exports = Coin;
