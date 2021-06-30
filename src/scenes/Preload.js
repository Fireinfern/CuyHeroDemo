class Preload extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
        this.load.spritesheet('cuy', './assets/pig_sprite.png', {
            frameWidth: 32,
            frameHeight: 32,
        });

        this.load.image('menu', './assets/ui/Msg06.png');
        this.load.image('option', './assets/ui/Button07.png');
        this.load.image('plus', './assets/ui/Icon32.png');
    }

    create() {
        this.scene.start("Game");
    }
}