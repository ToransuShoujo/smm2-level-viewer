/* eslint-env browser */

const Enemy = require('./enemy');

class Thwomp extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.thwomp;
	}

	draw() {

		let offset = this.spriteOffset.default;

		if (((this.data.flags & 0x06000040) == 0x06000040) || ((this.data.flags & 0x06000050) == 0x06000050)) {
			// Facing left or right
			offset = this.spriteOffset.sideways;
		}

		if ((this.data.flags & 0x06000050) == 0x06000050) {
			//Flip image if facing right, then draw it.
			this.canvasContext.save();
			this.canvasContext.scale(-1, 1);
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				offset.x,
				offset.y,
				offset.width,
				offset.height,
				this.data.position.x - 0.5,
				(this.scene.canvas.height - this.data.position.y) - 1,
				this.data.dimensions.width,
				this.data.dimensions.height
			);
			this.canvasContext.restore();
		} else {
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				offset.x,
				offset.y,
				offset.width,
				offset.height,
				this.data.position.x - 0.5,
				(this.scene.canvas.height - this.data.position.y) - 1,
				this.data.dimensions.width,
				this.data.dimensions.height
			);
		}
	}
}

module.exports = Thwomp;
