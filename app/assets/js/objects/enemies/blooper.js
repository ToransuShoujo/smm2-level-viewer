/* eslint-env browser */

const Enemy = require('./enemy');

class Blooper extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.blooper.default;
		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.scene.spriteSheetData.enemies.blooper.blooper_nanny;
		}
	}

	draw() {
		// big mushroom
		let scale = 1;
		if ((this.data.flags & 0b100000000000000) == 0b100000000000000){
			scale = 2;
		}

		// position adjustments
		const widthPositionAdjustment = (this.data.dimensions.width-1)/2;
		const heightPositionAdjustment = (this.data.dimensions.height-1);
		const spriteWidthAdjustment = (this.spriteOffset.width*scale/16)-this.data.dimensions.width;
		const spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height;

		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment,
			(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment ),
			this.spriteOffset.width/16*scale,
			this.spriteOffset.height/16*scale
		);

		//TODO: Fix wings, because Nintendo made the gap in the middle 14x16 instead of 16x16.
		if ((this.data.flags & 0x2) == 0x2) {
			const modifierOffset = this.scene.spriteSheetData.modifiers.twoWings;

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				modifierOffset.x,
				modifierOffset.y,
				modifierOffset.width,
				modifierOffset.height,
				this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment - (0.5*scale),
				(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment ),
				this.spriteOffset.width/8*scale,
				this.spriteOffset.height/16*scale
			);
		}

		if ((this.data.flags & 0x8000) == 0x8000) {
			const modifierOffset = this.scene.spriteSheetData.modifiers.parachute;

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				modifierOffset.x,
				modifierOffset.y,
				modifierOffset.width,
				modifierOffset.height,
				this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment + (0.5*scale - 0.5),
				(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment - 1),
				this.spriteOffset.width/16,
				this.spriteOffset.height/16
			);
		}
	}
}

module.exports = Blooper;
