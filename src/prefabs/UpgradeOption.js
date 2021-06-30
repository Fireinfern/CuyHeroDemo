class UpgradeOption {
    constructor(scene,x, y, option, text){
        this.background = scene.add.sprite(x,y, 'option');
        this.background.setOrigin(0.5);
        this.text = scene.add.text(x - 40, y, "Text");
        this.text.setOrigin(0,0.5);
    }
}