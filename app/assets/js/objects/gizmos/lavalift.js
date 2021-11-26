/* eslint-env browser */

const Gizmo = require('./gizmo');

class LavaLift extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffsets = this.scene.spriteSheetData.gizmos.lava_lift;
		this.spriteOffset = this.spriteOffsets.white; // Default to blue for now
		if ((this.data.flags & 0x4) == 0x4) {
			this.spriteOffset = this.spriteOffsets.blue;
		}
	}

	draw() {
		for (let x = 0; x < this.data.dimensions.width; x++) {
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteOffset.x,
				this.spriteOffset.y,
				this.spriteOffset.width,
				this.spriteOffset.height,
				Math.round(this.data.position.x - this.data.dimensions.width/2) + x,
				(this.scene.canvas.height - this.data.position.y),
				1, 1
			);
		}
	}
}

module.exports = LavaLift;