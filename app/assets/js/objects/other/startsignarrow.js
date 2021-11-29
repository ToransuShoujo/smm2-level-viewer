/* eslint-env browser */

class StartSignArrow{
    constructor(scene) {
		this.canvasContext = scene.ctx;
		this.scene = scene;
		this.spriteOffset = this.scene.spriteSheetData.other.start_sign_arrow;
		this.data = [];
		this.data.position = [];
		this.data.position.x = 1;
		this.data.position.y = scene.courseData.start_y+2;
		this.drawPriority = 0;
	}

	draw() {
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x,
			(this.scene.canvas.height - this.data.position.y),
			3,
			3
		);
	}
}

module.exports = StartSignArrow;
