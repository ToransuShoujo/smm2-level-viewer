/* eslint-env browser */

const Enemy = require('./enemy');

class LakitusCloud extends Enemy {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.lakitus_cloud;
		this.drawPriority = 1;
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
		let heightPositionAdjustment = (this.data.dimensions.height-1);
		let spriteWidthAdjustment = (this.spriteOffset.width*scale/16)-this.data.dimensions.width;
		let spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height;
		if(center)
		{
			spriteWidthAdjustment/=2.0;
			spriteHeightAdjustment/=2.0;
		}
		if(this.data.flags & 0b10000000) // TODO: maybe this works?
		{
			heightPositionAdjustment-=0.5;
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
	}
}

module.exports = LakitusCloud;
