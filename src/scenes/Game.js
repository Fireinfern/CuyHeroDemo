class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });
    }

    create() {
        this.click = false;
        this.currentLive = this.add.graphics();

        this.score = 0;
        this.money = 0;
        this.enemy = this.add.existing(new Enemy(this, 414 / 2, 736 / 2, 100, 1));
        this.cuy = this.add.existing(new Cuy(this, 414 / 2, 736 / 2 + 150));

        this.moneyText = this.add.text(207, 10, String(this.money));
        this.moneyText.setFontSize(30);
        this.moneyText.setOrigin(0.5, 0);

        this.powerUp = this.add.sprite(412 / 2, 700, 'plus');
        this.powerUp.setOrigin(0.5);
        this.powerUp.setInteractive();
        this.powerUp.on('pointerdown', (pointer) => {
            if (this.money >= 200) {
                this.money -= 200;
                this.moneyText.text = String(this.money.toString());
                this.cuy.attack += 5;
            }
        });

        //this.scene.launch("Upgrades");
    }

    update() {
        if (this.input.activePointer.isDown && !this.click) {
            this.cuy.play('attack')
                .on('animationcomplete', () => {
                    this.cuy.play('idle', true);
                });
            this.enemy.currentLive -= this.cuy.attack;
            this.click = true;
            let anim = this.tweens.create({
                targets: this.enemy,
                props: {
                    y: {
                        value: 736 / 2 - 10,
                        duration: 100,
                        ease: 'Sine.Out',
                        yoyo: true
                    }
                }
            }).play();
        }
        if (!this.input.activePointer.isDown && this.click) {
            this.click = false;
        }

        if (this.enemy.currentLive <= 0) {
            this.money += this.enemy.value;
            this.moneyText.text = String(this.money.toString());
            this.enemy.destroy();
            this.enemy = this.add.existing(new Enemy(this, 414 / 2, 736 / 2, 100 * (parseInt(this.score / 10) + 1), 1));
            this.score++;
        }
        let size = 352;
        let currentLive = size * (this.enemy.currentLive / this.enemy.live);
        currentLive = currentLive >= 0 ? currentLive : 0;

        this.currentLive.fillStyle(0x2d2d2d);
        this.currentLive.fillRect(32, 150, size, 48);
        this.currentLive.fillStyle(0x2dff2d);
        this.currentLive.fillRect(32, 150, currentLive, 48);
    }
}