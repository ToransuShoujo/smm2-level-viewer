/* eslint-env browser */

const Gizmo = require('./gizmo');

class SwingingClaw extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		// improve this later
		this.clawSpriteOffset = this.scene.spriteSheetData.gizmos.swinging_claw.open;
		
		this.topSpriteOffset = this.scene.spriteSheetData.gizmos.swinging_claw.top;
		
		this.chainSpriteOffset = this.scene.spriteSheetData.gizmos.swinging_claw.chain;
	}

	draw() {
		// top
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.topSpriteOffset.x,
			this.topSpriteOffset.y,
			this.topSpriteOffset.width,
			this.topSpriteOffset.height,
			this.data.position.x ,
			(this.scene.canvas.height - this.data.position.y) - 3,
			1,
			1
		);
		// chain
		for(let y=0 ; y<4 ; y++)
		{
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.chainSpriteOffset.x,
				this.chainSpriteOffset.y,
				this.chainSpriteOffset.width,
				this.chainSpriteOffset.height,
				this.data.position.x ,
				(this.scene.canvas.height - this.data.position.y) - 1 - y/2,
				1,
				1
			);
		}
		
		// claw
		this.canvasContext.drawImage(
			this.scene.spriteSheet,
			this.clawSpriteOffset.x,
			this.clawSpriteOffset.y,
			this.clawSpriteOffset.width,
			this.clawSpriteOffset.height,
			this.data.position.x - 1,
			(this.scene.canvas.height - this.data.position.y) - 0.5,
			3,
			2
		);
	}
}

module.exports = SwingingClaw;
