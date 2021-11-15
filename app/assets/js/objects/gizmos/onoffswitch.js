/* eslint-env browser */

const Gizmo = require('./gizmo');

class OnOffSwitch extends Gizmo {
        constructor(data) {
                super(data);

                this.scene = this.data.scene;
                this.spriteSheetThemeOffset = this.scene.spriteSheetThemeOffset;
                this.spriteOffset = this.scene.spriteSheetData.gizmos.on_off_switch;
        }

        draw() {
          let offset;
                this.canvasContext.drawImage(
                        this.scene.spriteSheet,
                        this.spriteSheetThemeOffset.x + this.spriteOffset.x,
                        this.spriteSheetThemeOffset.y + this.spriteOffset.y,
                        this.spriteOffset.width,
                        this.spriteOffset.height,
                        this.data.position.x,
                        (this.scene.canvas.height - this.data.position.y),
                        1, 1
                );
        }
}

module.exports = OnOffSwitch;
