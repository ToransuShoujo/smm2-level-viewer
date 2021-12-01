/* eslint-env browser */

const Enemy = require('./enemy');

class Thwomp extends Enemy {
	constructor(data) {
		super(data);
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.thwomp;
		this.facing = (this.data.flags >> 3 ) & 0b11;
		
		if (this.facing == 3) {
			// Facing south
			this.spriteOffset = this.spriteOffset.default;
		}
		else
		{
			this.spriteOffset = this.spriteOffset.sideways;
		}
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
		if(center)
		{
			spriteWidthAdjustment/=2.0;
		}
		const spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height;
		
		//Flip image if facing right, then draw it.
		this.canvasContext.save();
		if (this.facing == 2) // facing right
		{
			this.canvasContext.scale(-1, 1);
			this.canvasContext.translate(-2*this.data.position.x-1,0);
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
		this.canvasContext.restore();
	
		

		if ((this.data.flags & 0b10) == 0b10) {
			let modifierOffset = this.scene.spriteSheetData.modifiers.twoWings;

			if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x - (this.spriteOffset.width-16)/this.spriteOffset.width - modifierOffset.width/16 + 1,
					(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+1,
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
					this.data.position.x - 0.5,
					(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+1,
					modifierOffset.width/16*scale,
					modifierOffset.height/16*scale
				);
			}
		}
	}
}

module.exports = Thwomp;
