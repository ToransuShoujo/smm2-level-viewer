/* eslint-env browser */

const Gizmo = require('./gizmo');

class Skewer extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.gizmos.skewer;
	}

	draw() {
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x - 1.5,
			(this.scene.canvas.height - this.data.position.y) - 3,
			this.data.dimensions.width,
			this.data.dimensions.height
		);
	}
}

module.exports = Skewer;
