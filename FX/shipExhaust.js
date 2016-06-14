
var ExhaustEmitter = function(x, y, color){
  this.x = x;
  this.y = y;
  this.color = color;
  this.exhaustParticles = [];
  this.newParticle = function(){
    this.exhaustParticles.push( new ExhaustParticle(this.color) )
  }
  this.renderParticles = function(){
    for (var i = 0; i < this.exhaustParticles.length; i++){
      if (this.exhaustParticles[i].update(this.x, this.y) === true){
        this.exhaustParticles.splice(i, 1);
        i -= 1;
      }

    }
    this.newParticle();
  }
}

var ExhaustParticle = function(color){
  this.x = 0;
  this.y = 0;
  this.color = color;
  this.size = 1.2;
  this.globalAlpha = 1;
  this.alphaMinus = 0.05;
  this.dx = 0;
  this.dy = 1;
  this.ddx = (Math.random() * 0.1) - 0.05;
  this.ddy = (Math.random() * 0.1) - 0.05;
  this.update = function(equiz, egreeyega){
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
    ctx.rect(equiz + this.x - this.size/2, egreeyega + this.y, this.size, this.size);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    if (this.globalAlpha <= 0.2){
      return true;
    } else {
      return false;
    }
  }
}
