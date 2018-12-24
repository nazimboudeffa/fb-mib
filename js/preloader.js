class Preloader extends Phaser.Scene {

    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.facebook.showLoadProgress(this);
        this.facebook.once('startgame', this.startGame, this);

        this.load.image('card', 'assets/card.png');
        this.load.bitmapFont('azo', 'assets/azo-fire.png', 'assets/azo-fire.xml');

    }

    startGame ()
    {
        // this.scene.start('MainMenu');
        // this.scene.start('PlayerDetails');
        // this.scene.start('GameStats');
        // this.scene.start('GameData');
        this.scene.start('GameCard');
    }

}
