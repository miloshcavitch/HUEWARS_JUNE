
var ExhaustEmitter = function(x, y, color, type){
  this.x = x;
  this.y = y;
  this.color = color;
  this.exhaustParticles = [];
  this.newParticle = function(){
    this.exhaustParticles.push( new ExhaustParticle(this.color, type) )
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

var ExhaustParticle = function(color, type){
  this.x = 0;
  this.y = 0;
  this.color = color;
  this.size = 1.2;
  this.globalAlpha = 1;
  this.alphaMinus = 0.05;
  this.dx = 0;
  this.dy = 1;
  this.type = type;
  if (this.type === 'tankBullet'){
    this.ddx = (Math.random() * 0.2) - 0.1;
    this.ddy = (Math.random() * 0.5) - 0.25;
  } else {
    this.ddx = (Math.random() * 0.1) - 0.05;
    this.ddy = (Math.random() * 0.1) - 0.05;
  }
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
    if (this.type === 'tankBullet'){
      ctx.fillStyle = this.color;
    } else {
      ctx.fillStyle = 'black';
    }
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
