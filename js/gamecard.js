class GameCard extends Phaser.Scene {

    constructor ()
    {
        super('GameCard');
    }

    create ()
    {
        this.add.image(0, 0, 'card');

        this.add.bitmapText(400, 400, 'azo', this.facebook.playerName[0]).setOrigin(0.5);

        this.facebook.loadPlayerPhoto(this, 'player').once('photocomplete', this.addPlayerPhoto, this);
    }

    addPlayerPhoto (key)
    {
        this.add.image(400, 50, key);
    }

}
