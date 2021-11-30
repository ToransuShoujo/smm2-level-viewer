/* eslint-env browser */

const Enemy = require('./enemy');

class Thwomp extends Enemy {
	constructor(data) {
		super(data);
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.thwomp;
	}

	draw() {
		let offset = this.spriteOffset.sideways;
		let scale = 1;
		if ((this.data.flags & 0b100000000000000) == 0b100000000000000){
			scale = 2;
		}
		if ((this.data.flags & 0o30) == 0o30) {
			// Facing south
			offset = this.spriteOffset.default;
		}
		if ((this.data.flags & 0o20) == 0o20)
		{
			//Flip image if facing right, then draw it.
			this.canvasContext.save();
			this.canvasContext.scale(-1, 1);
			this.canvasContext.translate(-2*this.data.position.x -0.875,0);
			if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
				this.canvasContext.translate(-1, 0);
			}
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				offset.x,
				offset.y,
				offset.width,
				offset.height,
				this.data.position.x - (offset.width-16)/offset.width,
				(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+1,
				offset.width/16*scale,
				offset.height/16*scale
			);
			this.canvasContext.restore();
		}
		else
		{
			this.canvasContext.save();
			if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
				this.canvasContext.translate(-1, 0);
			}
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				offset.x,
				offset.y,
				offset.width,
				offset.height,
				this.data.position.x - (offset.width-16)/offset.width,
				(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+1,
				offset.width/16*scale,
				offset.height/16*scale
			);
			this.canvasContext.restore();
		}

		if ((this.data.flags & 0b10) == 0b10) {
			let modifierOffset = this.scene.spriteSheetData.modifiers.twoWings;

			if ((this.data.flags & 0b100000000000000) == 0b100000000000000) {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x - (offset.width-16)/offset.width - modifierOffset.width/16 + 1,
					(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+1,
					modifierOffset.width/16*scale,
					modifierOffset.height/16*scale
				);
			} else {
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					modifierOffset.x,
					modifierOffset.y,
					modifierOffset.width,
					modifierOffset.height,
					this.data.position.x - 0.5,
					(this.scene.canvas.height - this.data.position.y) - this.data.dimensions.height+1,
					modifierOffset.width/16*scale,
					modifierOffset.height/16*scale
				);
			}
		}
	}
}

module.exports = Thwomp;
