window.onload = () => {
    let Phaser = window.Phaser;

    const phaserConfig = {
        type: Phaser.AUTO,
        width: 414,
        height: 736,
        backgroundColor: "#5DACD8",
        scene: [
            Preload,
            Game,
            Upgrades
        ]
    };

    const game = new Phaser.Game(phaserConfig);
}