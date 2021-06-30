class Upgrades extends Phaser.Scene{
    constructor(){
        super({key:'Upgrades'});
    }
    create(){
        let y = 736 / 2;
        let x = 414 / 2;
        console.log("Hello There!");
        // Background
        this.menuBg = this.add.sprite(x,y,'menu');
        this.menuBg.setOrigin(0.5);
        this.menuBg.setScale(1.3);

        this.Object = new UpgradeOption(this ,x,y - 200,"Option", "Option");
    }
}