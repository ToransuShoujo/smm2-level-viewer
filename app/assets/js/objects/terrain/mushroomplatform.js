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
    for (let x = 0; x < this.data.dimensions.width; x++) {
      for (let y = 0; y < this.data.dimensions.height; y++) {
        let offset;

        if (y == this.data.dimensions.height - 1) {
          if (x == 0) {
            offset = this.spriteOffset.top_left;
          } else if (x == this.data.dimensions.width - 1) {
            offset = this.spriteOffset.top_right
          } else {
            offset = this.spriteOffset.top_middle;
          }
        } else {
          if ((x == this.data.dimensions.width / 2) || (x == (this.data.dimensions.width / 2) - 0.5)) {
            offset = this.spriteOffset.center;
          } else {
            offset = this.scene.spriteSheetData.other.blank_tile_themeoffset;
          }
        }

        //If the mushroom platform is of even width AND we are not at the top of the section...
        if ((y !== this.data.dimensions.height - 1) && (this.data.dimensions.width % 2 == 0)) {
          this.canvasContext.drawImage(
            this.scene.spriteSheet,
            this.spriteSheetThemeOffset.x + offset.x,
            this.spriteSheetThemeOffset.y + offset.y,
            offset.width,
            offset.height,
            this.data.position.x + x - 0.5,
            (this.scene.canvas.height - this.data.position.y_real) - y,
            1, 1
          );
        } else {
          this.canvasContext.drawImage(
            this.scene.spriteSheet,
            this.spriteSheetThemeOffset.x + offset.x,
            this.spriteSheetThemeOffset.y + offset.y,
            offset.width,
            offset.height,
            this.data.position.x + x,
            (this.scene.canvas.height - this.data.position.y_real) - y,
            1, 1
          );
        }
      }
    }
  }
}

module.exports = MushroomPlatform;
