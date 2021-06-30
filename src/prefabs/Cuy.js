class Cuy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, attack) {
        super(scene, x, y, 'cuy');
        this.setOrigin(0.5);
        this.setScale(5);

        scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNumbers('cuy', {frames: [0,1,2,3]}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'attack',
            frames: scene.anims.generateFrameNumbers('cuy', {frames: [15,16,17,18]}),
            frameRate: 15,
            repeat: 0,
        });

        this.attack = 5;

        this.play('idle', 1);
    }
}