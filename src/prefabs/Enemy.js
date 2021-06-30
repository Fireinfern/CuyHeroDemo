class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, live, value){
        super(scene, x, y, 'enemy');
        this.setOrigin(0.5);
        this.setScale(10);

        this.live = live;
        this.currentLive = live;
    
        this.value = (Phaser.Math.Between(40,50) * value);
    }
}