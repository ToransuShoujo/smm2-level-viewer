/* eslint-env browser */

const Enemy = require('./enemy');

class PiranhaPlant extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.piranha_plant.default;
  }


  draw() {
	// big mushroom
	let scale = 1;
	if ((this.data.flags & 0b100000000000000) == 0b100000000000000){
		scale = 2;
	}
	
	// variant
    if ((this.data.flags & 0x4) == 0x4) {
      this.spriteOffset = this.scene.spriteSheetData.enemies.piranha_plant.fire;
    }
	
	// position adjustments
	const widthPositionAdjustment = (this.data.dimensions.width-1)/2;
	const heightPositionAdjustment = (this.data.dimensions.height-1);
	const spriteWidthAdjustment = (this.spriteOffset.width*scale/16)-this.data.dimensions.width;
	const spriteHeightAdjustment = (this.spriteOffset.height*scale/16)-this.data.dimensions.height;
		
    this.canvasContext.drawImage(
		this.scene.spriteSheet,
		this.spriteOffset.x,
		this.spriteOffset.y,
		this.spriteOffset.width,
		this.spriteOffset.height,
		this.data.position.x - widthPositionAdjustment - spriteWidthAdjustment,
		(this.scene.canvas.height - this.data.position.y - heightPositionAdjustment - spriteHeightAdjustment ),
		this.spriteOffset.width/16*scale, 
		this.spriteOffset.height/16*scale
    );
  }
}

module.exports = PiranhaPlant;
