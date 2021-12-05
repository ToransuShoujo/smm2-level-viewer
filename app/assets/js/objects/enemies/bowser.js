/* eslint-env browser */

const Enemy = require('./enemy');

class Bowser extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.bowser;
	}

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
		const spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height-3/16*scale;
		if(center)
		{
			spriteWidthAdjustment/=2.0;
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

		if ((this.data.flags & 0b10) == 0b10) {
			const modifierOffset = this.scene.spriteSheetData.modifiers.oneWing;

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				modifierOffset.x,
				modifierOffset.y,
				modifierOffset.width,
				modifierOffset.height,
				this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment + (scale*1.8125),
				(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment + (scale*0.81)),
				this.spriteOffset.width/48*scale,
				this.spriteOffset.height/48*scale
			);
		}

		if ((this.data.flags & 0x8000) == 0x8000) {
			const modifierOffset = this.scene.spriteSheetData.modifiers.parachute;

			//I tried to make this work without doing it twice. I really did.
			if (scale == 1) {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment + (1*scale),
					(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment - 0.6225),
					this.spriteOffset.width/48,
					this.spriteOffset.height/48
				);
			} else {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment + (1*scale + 0.5),
					(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment - 0.25),
					this.spriteOffset.width/48,
					this.spriteOffset.height/48
				);
			}
		}
	}
}

module.exports = Bowser;
