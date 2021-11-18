/* eslint-env browser */

const Enemy = require('./enemy');

class Mechakoopa extends Enemy {
  constructor(data) {
    super(data);

    this.scene = this.data.scene;
    this.spriteOffset = this.scene.spriteSheetData.enemies.mechakoopa;
  }

  draw() {
    this.canvasContext.drawImage(
      this.scene.spriteSheet,
      this.spriteOffset.x,
      this.spriteOffset.y,
      this.spriteOffset.width,
      this.spriteOffset.height,
      this.data.position.x,
      (this.scene.canvas.height - this.data.position.y) - 1,
      2, 2
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
