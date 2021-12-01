/* eslint-env browser */

const Enemy = require('./enemy');

class Mechakoopa extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    if ((this.data.flags & 0x40000) == 0x40000) {
      this.spriteOffset = this.scene.spriteSheetData.enemies.mechakoopa.blasta;
    } else if ((this.data.flags & 0x80000) == 0x80000) {
      this.spriteOffset = this.scene.spriteSheetData.enemies.mechakoopa.zappa;
    } else {
      this.spriteOffset = this.scene.spriteSheetData.enemies.mechakoopa.default;
    }
  }

  draw() {
	// big mushroom
	let scale = 1;
	if ((this.data.flags & 0b100000000000000) == 0b100000000000000){
		scale = 2;
	}
		
	// center this?
	let center=true;
	
	// position adjustments
	const widthPositionAdjustment = (this.data.dimensions.width-1)/2;
	const heightPositionAdjustment = (this.data.dimensions.height-1);
	let spriteWidthAdjustment = (this.spriteOffset.width*scale/16)-this.data.dimensions.width;
	if(center)
	{
		spriteWidthAdjustment/=2.0;
	}
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

    if ((this.data.flags & 0x2) == 0x2) {
      let modifierOffset;
			modifierOffset = this.scene.spriteSheetData.modifiers.oneWing;

			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				modifierOffset.x,
				modifierOffset.y,
				modifierOffset.width,
				modifierOffset.height,
				this.data.position.x + 1,
				(this.scene.canvas.height - this.data.position.y - 0.5),
				1, 1
			);
		}
  }
}

module.exports = Mechakoopa;
