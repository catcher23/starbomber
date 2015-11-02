(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Explosion = Asteroids.Explosion = function (options) {
    options.radius = Explosion.RADIUS;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 0;
    Asteroids.MovingObject.call(this, options);

  };

  Explosion.RADIUS = 2;
  Explosion.SPEED = -5;

  Asteroids.Util.inherits(Explosion, Asteroids.MovingObject);

  Explosion.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {

      otherObject.remove();
    }
  };

  Explosion.prototype.update = function () {
    this.tickCount += 1;

       if (this.tickCount > this.ticksPerFrame) {

         tickCount = 0;

           // Go to the next frame
           this.frameIndex += 1;
       }

  };


  Explosion.prototype.draw = function (ctx) {
    this.update();
    var expa = new Image();
    expa.src = 'expa.png';
    ctx.drawImage(
      expa,
      this.frameIndex * 128,
      0,
      128,
      128,
      this.pos[0]-40,
      this.pos[1]-40,
      this.radius*20*Math.PI,
      this.radius*20*Math.PI
    );
  };

  Explosion.prototype.isWrappable = false;
})();