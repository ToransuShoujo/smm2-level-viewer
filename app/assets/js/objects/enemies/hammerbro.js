/* eslint-env browser */

const Enemy = require('./enemy');

class HammerBro extends Enemy {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.hammer_bro.default;

		if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
			this.spriteOffset = this.scene.spriteSheetData.enemies.hammer_bro.sledge_bro;
		}
	}

	draw() {
		// center this?
		let center=true;
		
		// position adjustments
		const widthPositionAdjustment = (this.data.dimensions.width-1)/2;
		const heightPositionAdjustment = (this.data.dimensions.height-1);
		let spriteWidthAdjustment = (this.spriteOffset.width/16)-this.data.dimensions.width;
		const spriteHeightAdjustment = (this.spriteOffset.height/16)-this.data.dimensions.height;
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
			this.spriteOffset.width/16, 
			this.spriteOffset.height/16
		);
	}
}

module.exports = HammerBro;
