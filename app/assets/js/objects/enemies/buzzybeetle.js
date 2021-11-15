/* eslint-env browser */

const Enemy = require('./enemy');

class BuzzyBeetle extends Enemy {
        constructor(data) {
                super(data);
                
                this.scene = this.data.scene;
                this.spriteOffset = this.scene.spriteSheetData.enemies.buzzy_beetle;
        }

        draw() {
                this.canvasContext.drawImage(
                        this.scene.spriteSheet,
                        this.spriteOffset.x,
                        this.spriteOffset.y,
                        this.spriteOffset.width,
                        this.spriteOffset.height,
                        this.data.position.x,
                        (this.scene.canvas.height - this.data.position.y),
                        this.data.dimensions.width,
                        this.data.dimensions.height
                );
        }
}

module.exports = BuzzyBeetle;
