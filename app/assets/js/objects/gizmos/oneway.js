/* eslint-env browser */

const Gizmo = require('./gizmo');

class OneWay extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.gizmos.one_way;
	}

	draw() {
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x - 0.5,
			(this.scene.canvas.height - this.data.position.y) - 1,
			this.data.dimensions.width,
			this.data.dimensions.height
		);
	}
}

module.exports = OneWay;
