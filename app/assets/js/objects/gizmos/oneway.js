/* eslint-env browser */

const Gizmo = require('./gizmo');

class OneWay extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.gizmos.one_way;
	
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
		this.canvasContext.translate(
			this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment + this.data.dimensions.width / 2, 
			this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment + this.data.dimensions.height / 2
		);
		this.canvasContext.rotate(this.rotation*90.0 * Math.PI / 180.0);
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			-this.data.dimensions.width / 2.0,
			-this.data.dimensions.height / 2.0,
			this.spriteOffset.width/16*scale, 
			this.spriteOffset.height/16*scale
		);
		
		this.canvasContext.restore();
	}
}

module.exports = OneWay;
