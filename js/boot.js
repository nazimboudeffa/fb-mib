FBInstant.initializeAsync().then(function() {

    var config = {
        type: Phaser.CANVAS,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#222448',
        scene: [ Preloader, GameCard ]
    };

    new Phaser.Game(config);

});
