/* eslint-env browser */

const Gizmo = require('./gizmo');

class SnakeBlock extends Gizmo {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
	if ((this.data.flags & 0x4) == 0x4) {
		this.spriteOffset = this.scene.spriteSheetData.gizmos.snake_block.fast;
    }
	else{
		this.spriteOffset = this.scene.spriteSheetData.gizmos.snake_block.default;
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
		    1,
		    1
		);
	}
  }
}

module.exports = SnakeBlock;
