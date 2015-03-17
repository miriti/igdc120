/**
 *
 * @param time
 * @constructor
 * @extends Game.objects.Bomb
 */
Game.objects.TimeBomb = function (time) {
    Game.objects.Bomb.call(this);
    this.time = time || 2;
};

extend(Game.objects.TimeBomb, Game.objects.Bomb, {
    update: function (delta) {
        Game.MapObject.prototype.update.call(this, delta);

        if (this.time <= 0) {
            this.goOff();
        } else {
            this.time -= delta;
        }
    }
});