/* eslint-env browser */

const Enemy = require('./enemy');

class Boo extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;

		// variants
		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.scene.spriteSheetData.enemies.boo.ring;
		}
		else {
			this.spriteOffset = this.scene.spriteSheetData.enemies.boo.default;
		}
	}

	//TODO: figure out how to check tile below to see if stretch or not.

	draw() {
		// big mushroom
		let scale = 1;
		if ((this.data.flags & 0b100000000000000) == 0b100000000000000){
			scale = 2;
		}

		// center this?
		let center=true;

		// position adjustments
		const widthPositionAdjustment = (this.data.dimensions.width-1)/2;
		const heightPositionAdjustment = (this.data.dimensions.height-1);
		let spriteWidthAdjustment = (this.spriteOffset.width*scale/16)-this.data.dimensions.width;
		let spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height;
		if(center)
		{
			spriteWidthAdjustment/=2.0;
			spriteHeightAdjustment/=2.0;
		}

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

		//TODO: Take a look at parachute and wings for boo ring, because that's a problem.
		if ((this.data.flags & 0x2) == 0x2) {
			const modifierOffset = this.scene.spriteSheetData.modifiers.oneWing;

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				modifierOffset.x,
				modifierOffset.y,
				modifierOffset.width,
				modifierOffset.height,
				this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment + (scale*0.6875),
				(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment - (scale*0.25)),
				this.spriteOffset.width/16*scale,
				this.spriteOffset.height/16*scale
			);

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
}

module.exports = Boo;
