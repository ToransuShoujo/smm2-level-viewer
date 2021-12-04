/* eslint-env browser */

const Terrain = require('./terrain');

class Bridge extends Terrain {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
		this.spriteOffsets = this.scene.spriteSheetData.terrain.bridge;
	}

	draw() {
		this.spriteOffset = this.spriteOffsets.bottom;
		for(let x=0; x<this.data.dimensions.width; x++)
		{
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteSheetThemeOffset.x + this.spriteOffset.x,
				this.spriteSheetThemeOffset.y + this.spriteOffset.y,
				this.spriteOffset.width,
				this.spriteOffset.height,
				this.data.position.x+x,
				this.scene.canvas.height - this.data.position.y,
				1,
				1
			);
		}
		for(let x=0; x<this.data.dimensions.width; x++)
		{
			if(x==0)
			{
				this.spriteOffset = this.spriteOffsets.left;
			}
			else if(x==this.data.dimensions.width-1)
			{
				this.spriteOffset = this.spriteOffsets.right;
			}
			else 
			{
				this.spriteOffset = this.spriteOffsets.middle
			}
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteSheetThemeOffset.x + this.spriteOffset.x,
				this.spriteSheetThemeOffset.y + this.spriteOffset.y,
				this.spriteOffset.width,
				this.spriteOffset.height,
				this.data.position.x+x,
				this.scene.canvas.height - this.data.position.y-1,
				1,
				1
			);
		}
	}
}

module.exports = Bridge;
