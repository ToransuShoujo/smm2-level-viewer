/* eslint-env browser */

const Enemy = require('./enemy');

class BobOmb extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.bob_omb.default;
	}

	draw() {
		let scale = 1;
		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.scene.spriteSheetData.enemies.bob_omb.lit;
		}
		this.canvasContext.save();
		if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
			scale = 2;
			this.canvasContext.translate(-0.5, -1);
		}
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x,
			(this.scene.canvas.height - this.data.position.y),
			this.spriteOffset.width/16*scale,
			this.spriteOffset.height/16*scale
		);
		this.canvasContext.restore();

		if ((this.data.flags & 0b10) == 0b10) {
			const modifierOffset = this.scene.spriteSheetData.modifiers.oneWing;
			if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x + 0.75,
					(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+0.625,
					modifierOffset.width/16*scale,
					modifierOffset.height/16*scale
				);
			} else {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x + 0.625,
					(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height + 0.81,
					modifierOffset.width/16*scale,
					modifierOffset.height/16*scale
				);
			}
		}
	}
}

module.exports = BobOmb;
