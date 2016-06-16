var tankBullets = [];
var updateTankBullets = function(){
  for (var i = 0; i < tankBullets.length; i++){
    tankBullets[i].update();

    if ( tankBullets[i].x > (canvas.width + tankBullets[i].size) || tankBullets[i].x < (0 - tankBullets[i].size) || tankBullets[i].y > (canvas.height + tankBullets[i].size) || tankBullets[i].y < (0 - tankBullets[i].size) ){
      tankBullets.splice(i, 1);
      i -= 1;
    }
  }
}
var TankBullet = function(size, angle, initColor, x, y){
  this.size = size;
  this.multiplierBool = false;
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.color = initColor;
  this.exhaustEmitters = [];

  for (var i = 0; i < 10; i++){
    this.exhaustEmitters.push(new ExhaustEmitter(0,0, this.color, 'tankBullet') );
  }
  this.setEmitterPos = function(){
    var angle =  90;
    for (var i = 0; i < this.exhaustEmitters.length; i++){
      this.exhaustEmitters[i].x = ( (this.size * 0.8) * Math.cos(Math.PI/180 * angle));
      this.exhaustEmitters[i].y = ( (this.size * 0.8) * Math.sin(Math.PI/180 * angle));

      angle -= 360/this.exhaustEmitters.length;
      this.exhaustEmitters[i].newParticle();
    }
  }
  this.setEmitterPos();
  this.exhaustEmitters.forEach(function(emitter){
    for (var i = 0; i < 15; i++){
      emitter.newParticle();
      for ( var i = 0; i < emitter.exhaustParticles.length; i++){
        emitter.exhaustParticles[i].initCreation();
      }
    }

  });
  this.renderExhaust = function(){
    this.exhaustEmitters.forEach(function(emitter){
      emitter.renderParticles();
    });
  }

  this.update = function(){
    this.multiplierBool = !this.multiplierBool;
    var size = this.size;
    this.y -= 10;//temp
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    //this.color += 10;
    this.renderExhaust();
    ctx.beginPath();
    ctx.arc(0,0, size, 0, Math.PI* 2);
    ctx.strokeStyle = "hsl(" + this.color + ", 100%, 60%)";
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.strokeStyle = "hsl(" + this.color + ", 100%, 55%)";
    ctx.fillStyle = 'black';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.7;
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fill();
    ctx.closePath();
    ctx.rotate(-1 * this.angle);
    ctx.translate( (-1 * this.x) , (-1 * this.y) );
  }
}
