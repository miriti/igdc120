Game.tiles.BonusRadio = function () {
    Game.tiles.BonusTile.call(this);
    this.initImage('data/spt/bonus_radio.png');
};

extend(Game.tiles.BonusRadio, Game.tiles.BonusTile, {});