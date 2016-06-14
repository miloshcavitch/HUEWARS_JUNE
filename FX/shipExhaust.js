var exhaustParticles = [];
var updateExhaustParticles = function(){
  exhaustParticles.push(new ExhaustParticle(testEmitter) )
  for (var i = 0; i < exhaustParticles.length; i++){
    exhaustParticles[i].update();
    for (var i = 0; i < exhaustParticles.length; i++){
      exhaustParticles[i].update();
      if (exhaustParticles[i].globalAlpha <= 0.05){
        exhaustParticles.splice(i,1);
        i -= 1;
      }
    }
  }
}
var ExhaustEmitter = function(x, y, color){
  this.x = x;
  this.y = y;
  this.color = color;
  this.newParticle = function(){
    exhaustParticles.push(new ExhaustParticle(this))
  }
}

var ExhaustParticle = function(emitter){
  this.x = emitter.x;
  this.y = emitter.y;
  this.color = emitter.color;
  this.size = 1.2;
  this.globalAlpha = 1;
  this.alphaMinus = 0.05;
  this.dx = 0;
  this.dy = 1;
  this.ddx = (Math.random() * 0.1) - 0.05;
  this.ddy = (Math.random() * 0.1) - 0.05;
  this.update = function(){
    this.x += this.dx;
    this.dx += this.ddx;
    this.y += this.dy;
    this.dy += this.ddy;
    this.size += 0.1;
    this.globalAlpha -= this.alphaMinus;

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size * 0.2;
    ctx.fillStyle = 'black';
    ctx.globalAlpha = this.globalAlpha;
    ctx.rect(this.x - this.size/2, this.y, this.size, this.size);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
