/* eslint-env browser */

class GoalPole {
    constructor(scene) {
		this.canvasContext = scene.ctx;
		this.scene = scene;
		this.spriteOffset = this.scene.spriteSheetData.other.goal_pole.default;
		this.data = [];
		this.data.position = [];
		this.data.position.x = scene.courseData.goal_x/10-0.5;
		this.drawPriority = 0;

		// castle theme
		if (this.scene.courseData.theme == 2) {
			this.spriteOffset = this.scene.spriteSheetData.other.goal_pole.axe;
			this.data.position.y = scene.courseData.goal_y + 3;
		}
		else {
			this.spriteOffset = this.scene.spriteSheetData.other.goal_pole.default;	
			this.data.position.y = scene.courseData.goal_y + 4.5;
		}
	}

	draw() {
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.spriteOffset.x,
			this.spriteOffset.y,
			this.spriteOffset.width,
			this.spriteOffset.height,
			this.data.position.x,
			this.scene.canvas.height - this.data.position.y,
			this.spriteOffset.width/16,
			this.spriteOffset.height/16
		);
	}
}

module.exports = GoalPole;