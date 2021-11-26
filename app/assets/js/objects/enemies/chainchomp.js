/* eslint-env browser */

const Enemy = require('./enemy');

class ChainChomp extends Enemy {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteOffset = this.scene.spriteSheetData.enemies.chain_chomp.body;
		this.stakeSpriteOffset = this.scene.spriteSheetData.enemies.chain_chomp.stake;
	}

	draw() {
		// just body
		if ((this.data.flags & 0x4) == 0x4) {
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteOffset.x,
				this.spriteOffset.y,
				this.spriteOffset.width,
				this.spriteOffset.height,
				this.data.position.x,
				(this.scene.canvas.height - this.data.position.y),
				this.data.dimensions.width,
				this.data.dimensions.height
			);
		}
		// body and stake
		else {
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.stakeSpriteOffset.x,
				this.stakeSpriteOffset.y,
				this.stakeSpriteOffset.width,
				this.stakeSpriteOffset.height,
				this.data.position.x,
				(this.scene.canvas.height - this.data.position.y),
				this.data.dimensions.width,
				this.data.dimensions.height
			);
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteOffset.x,
				this.spriteOffset.y,
				this.spriteOffset.width,
				this.spriteOffset.height,
				this.data.position.x,
				(this.scene.canvas.height - this.data.position.y),
				this.data.dimensions.width,
				this.data.dimensions.height
			);
		}
	}
}

module.exports = ChainChomp;
