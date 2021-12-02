/* eslint-env browser */

const Gizmo = require('./gizmo');

class Burner extends Gizmo {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.gizmos.burner.base;
		if ((this.data.flags & 0x4) == 0x4) {
			this.fireSpriteOffset = this.scene.spriteSheetData.gizmos.burner.alternate_fire;
		} else {
			this.fireSpriteOffset = this.scene.spriteSheetData.gizmos.burner.fire;
		}
	}

	draw() {
		// TODO: add rotations
		
		// position adjustments
		const widthPositionAdjustment = (this.data.dimensions.width-1)/2;
		const heightPositionAdjustment = (this.data.dimensions.height-1);
		let spriteWidthAdjustment = (this.spriteOffset.width/16)-this.data.dimensions.width;
		const spriteHeightAdjustment = (this.spriteOffset.height/16)-this.data.dimensions.height;
		
		// draw base
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
		
		// draw fire
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.fireSpriteOffset.x,
			this.fireSpriteOffset.y,
			this.fireSpriteOffset.width,
			this.fireSpriteOffset.height,
			this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment,
			(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment ) - 3,
			this.fireSpriteOffset.width/16, 
			this.fireSpriteOffset.height/16
		);
	}
}

module.exports = Burner;
