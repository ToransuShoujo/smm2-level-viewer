/* eslint-env browser */

const Item = require('./item');

class BulletBillMask extends Item {
        constructor(data) {
                super(data);
                
                this.scene = this.data.scene;
                this.spriteOffset = this.scene.spriteSheetData.items.bullet_bill_mask;
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

module.exports = BulletBillMask;
