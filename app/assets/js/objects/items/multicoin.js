const Coin = require('./coin');

class MultiCoin extends Coin {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.items.multicoin.ten;
	}

	draw() {

		if ((this.data.flags & 0x40000) == 0x40000) {
			this.spriteOffset = this.scene.spriteSheetData.items.multicoin.thirty;
		} else if ((this.data.flags & 0x80000) == 0x80000) {
			this.spriteOffset = this.scene.spriteSheetData.items.multicoin.fifty;
		}

		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x - 0.5, // yeah
			(this.scene.canvas.height - this.data.position.y) - 1,
			this.data.dimensions.width,
			this.data.dimensions.height
		);
	}
}

module.exports = MultiCoin;
