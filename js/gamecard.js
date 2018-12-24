class GameCard extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'GameCard', active: false });
    }

    create ()
    {
        this.add.image(0, 0, 'card').setOrigin(0, 0);

        this.add.bitmapText(260, 180, 'azo', this.facebook.playerName[0]).setOrigin(0.5);

        //this.load.image('player', this.facebook.playerPhotoURL);
        //this.facebook.loadPlayerPhoto(this, 'player').once('photocomplete', this.addPlayerPhoto, this);

        this.load.image('player', this.facebook.playerPhotoURL);

        this.load.once('filecomplete-image-player', this.addPlayerPhoto, this);

        this.load.start();

    }

    addPlayerPhoto (key)
    {
        this.add.image(400, 50, key).setOrigin(0, 0).setScale(0.5);
    }

}
