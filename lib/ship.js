(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (params) {
    params.radius = Ship.RADIUS;
    params.vel = params.vel || [0, 0];
    params.color = params.color || 'green';
    Asteroids.MovingObject.call(this, params);
  };

Ship.RADIUS = 10;


  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2* Math.PI, true
    );
    ctx.fill();

    Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};
  };
  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function () {
    var norm = Asteroids.Util.norm(this.vel);

    if (norm == 0) {
      // Can't fire unless moving.
      return;
    }

    var relVel = Asteroids.Util.scale(
      Asteroids.Util.dir(this.vel),
      Asteroids.Bullet.SPEED
    );

    var bulletVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    var bullet = new Asteroids.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };
  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };
})();