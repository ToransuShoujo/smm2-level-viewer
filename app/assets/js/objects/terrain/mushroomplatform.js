/* eslint-env browser */

const Terrain = require('./terrain');

class MushroomPlatform extends Terrain {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
    this.spriteOffset = this.scene.spriteSheetData.terrain.mushroom_platform;

    if (this.data.flags & 0x40000) {
      this.spriteOffset = this.spriteOffset.version_2;
    } else if(this.data.flags & 0x80000) {
      this.spriteOffset = this.spriteOffset.version_3;
    } else {
      this.spriteOffset =  this.spriteOffset.default;
    }

    // Hack to fix draw order. Please, future self, find a better way
		this.data.position.y_real = this.data.position.y;
		this.data.position.y = (this.data.position.y + this.data.dimensions.height);

  }

  draw() {
    for (let x = 1; x < this.data.dimensions.width; x++) {
      for (let y = 0; y < this.data.dimensions.height; y++) {
        let offset;

        if (x == 1) {
          if (y !== this.data.dimensions.height - 1) {
            break;
          } else {
            offset = this.spriteOffset.top_left;
          }
        } else if (x == this.data.dimensions.width) {
          if (y !== this.data.dimensions.height - 1) {
            break;
          } else {
            offset = this.spriteOffset.top_right;
          }
        } else {
          if ((this.data.dimensions.width) % 2 !== 0) {
            if (y !== this.data.dimensions.height - 1) {
              if (x == (this.data.dimensions.width / 2) + 0.5) {
                offset = this.spriteOffset.center;
              } else {
                break;
              }
            } else {
              offset = this.spriteOffset.top_middle;
            }
          } else {
            if (y !== this.data.dimensions.height - 1) {
              if (x == (this.data.dimensions.width / 2) - 1) {
                offset = this.spriteOffset.center_offset_left;
              } else if (x == (this.data.dimensions.width / 2)) {
                offset = this.spriteOffset.center_offset_right;
              } else {
                break;
              }
            } else {
              offset = this.spriteOffset.top_middle;
            }
          }
        }
        this.canvasContext.drawImage(
  				this.scene.spriteSheet,
  				this.spriteSheetThemeOffset.x + offset.x,
  				this.spriteSheetThemeOffset.y + offset.y,
  				offset.width,
  				offset.height,
  				this.data.position.x + x - 1,
  				(this.scene.canvas.height - this.data.position.y_real) - y,
  				1, 1
  			);
      }
    }
  }
}

module.exports = MushroomPlatform;
