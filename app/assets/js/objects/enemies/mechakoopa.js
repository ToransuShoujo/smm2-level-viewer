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
        }
}

module.exports = Mechakoopa;
