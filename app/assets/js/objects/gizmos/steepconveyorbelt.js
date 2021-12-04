/* eslint-env browser */

const Gizmo = require('./gizmo');

class SteepConveyorBelt extends Gizmo {
	constructor(data) {
		super(data);
		
		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
	
		this.direction = (this.data.flags >> 3 ) & 0b1; // 0 is left, 1 is right
		this.variant = (this.data.flags >> 18 ) & 0b11; // 0 is normal, 1 is fast
		this.upDown = (this.data.flags >> 20 ) & 0b11; // 1 is up slope, 2 is down slope, from left to right
		this.onOff = (this.data.flags >> 22 ) & 0b1; // 0 is default, 1 is on
		
		if (this.onOff == 1){
			this.spriteOffsets = this.scene.spriteSheetData.gizmos.steep_conveyor_belt.on;
		}
		else{
			this.spriteOffsets = this.scene.spriteSheetData.gizmos.steep_conveyor_belt.default;
		}
	}

	draw() {
		let y = (this.upDown == 1) ? 0 : this.data.dimensions.height-1;
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
				this.spriteOffset = (this.upDown == 1) ? this.spriteOffsets.center_top_left : this.spriteOffsets.center_bottom_left;
				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					this.spriteSheetThemeOffset.x + this.spriteOffset.x,
					this.spriteSheetThemeOffset.y + this.spriteOffset.y,
					this.spriteOffset.width,
					this.spriteOffset.height,
					this.data.position.x + x,
					this.scene.canvas.height - this.data.position.y - y,
					1,
					1
				);
				this.spriteOffset = (this.upDown == 1) ? this.spriteOffsets.center_bottom_right : this.spriteOffsets.center_top_right;
				y+= (this.upDown == 1) ? 1 : -1;
			}
			this.canvasContext.drawImage(
				this.scene.spriteSheet,
				this.spriteSheetThemeOffset.x + this.spriteOffset.x,
				this.spriteSheetThemeOffset.y + this.spriteOffset.y,
				this.spriteOffset.width,
				this.spriteOffset.height,
				this.data.position.x + x,
				this.scene.canvas.height - this.data.position.y - y,
				1,
				1
			);
		}
	}
}

module.exports = SteepConveyorBelt;
