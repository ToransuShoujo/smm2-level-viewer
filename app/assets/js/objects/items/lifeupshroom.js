/* eslint-env browser */

const Item = require('./item');

class LifeUpShroom extends Item {
	constructor(data) {
		super(data);

		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.items.life_up_shroom;
	}

	draw() {

		let offset = this.spriteOffset.default;

		if (this.courseData.time_of_day == 2) {
			offset = this.spriteOffset.poison;
		}

		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			offset.x,
			offset.y,
			offset.width,
			offset.height,
			this.data.position.x,
			(this.scene.canvas.height - this.data.position.y),
			this.data.dimensions.width,
			this.data.dimensions.height
		);
	}
}

module.exports = LifeUpShroom;
