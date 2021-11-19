/* eslint-env browser */

const Enemy = require('./enemy');

class BobOmb extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.bob_omb.default;
	}

	draw() {

		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.scene.spriteSheetData.enemies.bob_omb.lit;
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

module.exports = BobOmb;
