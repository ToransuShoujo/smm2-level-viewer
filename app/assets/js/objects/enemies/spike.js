/* eslint-env browser */

const Enemy = require('./enemy');

class Spike extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.spike.default;
	
	if ((this.data.flags & 0x4) == 0x4) {
      if (this.scene.theme == 'snow') {
        this.spriteOffset = this.scene.spriteSheetData.enemies.spike.snowball;
      } else {
        this.spriteOffset = this.scene.spriteSheetData.enemies.spike.spike_ball;
      }
    }
  }

  draw() {
    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      this.spriteOffset.x,
      this.spriteOffset.y,
      this.spriteOffset.width,
      this.spriteOffset.height,
	  Math.round(this.data.position.x - this.data.dimensions.width/2),
      (this.scene.canvas.height - this.data.position.y) - parseInt(this.data.dimensions.height/2),
      this.data.dimensions.width,
      this.data.dimensions.height
    );
  }
}

module.exports = Spike;
