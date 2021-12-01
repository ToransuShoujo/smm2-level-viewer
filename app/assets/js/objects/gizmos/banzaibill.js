/* eslint-env browser */

const Gizmo = require('./gizmo');

class BanzaiBill extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;

    if ((this.data.flags & 0x4) == 0x4) {
      this.spriteOffset = this.scene.spriteSheetData.gizmos.banzai_bill.bulls_eye;
    } else {
		this.spriteOffset = this.scene.spriteSheetData.gizmos.banzai_bill.default;
	}
	
	this.rotation = (this.data.flags >> 22 ) & 0b111;
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
		let spriteWidthAdjustment = (this.spriteOffset.width*scale/16)-this.data.dimensions.width;
		const spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height;
		
		this.canvasContext.save();
		if (this.rotation == 2) // facing right
		{
			this.canvasContext.scale(-1, 1);
			this.canvasContext.translate(-2*this.data.position.x-1,0);
		}
		else if (this.rotation == 1) // facing up
		{
			//this.canvasContext.translate(-2*this.data.position.x-1,0);
			//this.canvasContext.rotate(Math.PI/2.0);
			//this.canvasContext.translate(-this.spriteOffset.width*scale/2.0,-this.spriteOffset.height*scale/2.0);
		}
		else if (this.rotation == 3) // facing down
		{
			
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
	}
}

module.exports = BanzaiBill;
