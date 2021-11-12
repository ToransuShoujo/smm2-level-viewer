/* eslint-env browser */

const Terrain = require('./terrain.js');
var pipe_direction;

class Pipe extends Terrain {
	constructor(data) {
		super(data);


		this.scene = this.data.scene;
		this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
		this.spriteOffsets = this.scene.spriteSheetData.terrain.pipe;

		if ((this.data.flags & 0xC0000) == 0xC0000) {
			this.spriteOffsets = this.spriteOffsets.yellow;
		} else if((this.data.flags & 0x80000) == 0x80000) {
			this.spriteOffsets = this.spriteOffsets.blue;
		} else if((this.data.flags & 0x40000) == 0x40000) {
			this.spriteOffsets = this.spriteOffsets.red;
		} else {
			this.spriteOffsets =  this.spriteOffsets.green;
		}

		if ((this.data.flags & 0x06000060) == 0x06000060) {
			pipe_direction = "down";
		} else if((this.data.flags & 0x06000020) == 0x06000020) {
			pipe_direction = "left";
		} else if((this.data.flags & 0x06000000) == 0x06000000) {
			pipe_direction = "right";
		} else {
			pipe_direction = "up";
		}

		// Hack to fix draw order. Please, future self, find a better way
		this.data.position.y_real = this.data.position.y;
		this.data.position.y = (this.data.position.y + this.data.dimensions.height);
	}

	draw() {
		for (let x = 0; x < this.data.dimensions.width; x++) {
			for (let y = 0; y < this.data.dimensions.height; y++) {
				let offset;
				// The "top" and "bottom" positions are "reversed" because HTML5 canvas grid origin is opposite of SMM2 origin
				if (x === 0) {
					if (y === 0) {
						if (pipe_direction == "down" || pipe_direction == "up") {
							if (pipe_direction == "up") {
								offset = this.spriteOffsets.vertical.bottom_end_left;
							} else {
								offset = this.spriteOffsets.vertical.center_left;
							}
						} else {
							if (pipe_direction == "left") {
								offset = this.spriteOffsets.horizontal.left_end_bottom;
							} else {
								offset = this.spriteOffsets.horizontal.center_bottom;
							}
						}
					} else if (y === this.data.dimensions.height-1) {
						if (pipe_direction == "down" || pipe_direction == "up") {
							if (pipe_direction == "up") {
								offset = this.spriteOffsets.vertical.center_left;
							} else {
								offset = this.spriteOffsets.vertical.top_end_left;
							}
						} else {
							if (pipe_direction == "left") {
								offset = this.spriteOffsets.horizontal.left_end_top;
							} else {
								offset = this.spriteOffsets.horizontal.center_top;
							}
						}
					} else {
						offset = this.spriteOffsets.vertical.center_left;
					}
				} else if (x === this.data.dimensions.width-1) {
					if (y === 0) {
						if (pipe_direction == "down" || pipe_direction == "up") {
							if (pipe_direction == "up") {
								offset = this.spriteOffsets.vertical.bottom_end_right;
							} else {
								offset = this.spriteOffsets.vertical.center_right;
							}
						} else {
							if (pipe_direction == "left") {
								offset = this.spriteOffsets.horizontal.center_bottom;
							} else {
								offset = this.spriteOffsets.horizontal.right_end_bottom;
							}
						}
					} else if (y === this.data.dimensions.height-1) {
						if (pipe_direction == "down" || pipe_direction == "up") {
							if (pipe_direction == "up") {
								offset = this.spriteOffsets.vertical.center_right;
							} else {
								offset = this.spriteOffsets.vertical.top_end_right;
							}
						} else {
							if (pipe_direction == "left") {
								offset = this.spriteOffsets.horizontal.center_top;
							} else {
								offset = this.spriteOffsets.horizontal.right_end_top;
							}
						}
					} else {
						offset = this.spriteOffsets.vertical.center_right;
					}
				}

				this.canvasContext.drawImage(
					this.scene.spriteSheet,
					this.spriteSheetThemeOffset.x + offset.x,
					this.spriteSheetThemeOffset.y + offset.y,
					offset.width,
					offset.height,
					this.data.position.x + x,
					(this.scene.canvas.height - this.data.position.y_real) + y,
					1, 1
				);
			}
		}
	}
}

module.exports = Pipe;
