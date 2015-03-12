/**
 *
 * @constructor
 * @extends PIXI.Container
 */
Game.GameObject = function () {
    PIXI.Container.call(this);
    this.bW = 0;
    this.bH = 0;
};

extend(Game.GameObject, PIXI.Container, {
    update: function (delta) {
        for (var i = this.children.length - 1; i >= 0; i--) {
            var c = this.children[i];
            if (c instanceof Game.GameObject) {
                c.update(delta);
            }
        }
    },
    genQuad: function (fill, w, h) {
        w = w || this.bW;
        h = h || this.bH;
        var g = new PIXI.Graphics();
        g.beginFill(fill);
        g.drawRect(-w / 2, -h / 2, w, h);
        g.endFill();
        return g;
    }
});