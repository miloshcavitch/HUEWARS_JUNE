var tankBullets = [];
var updateTankBullets = function(){
  for (var i = 0; i < tankBullets.length; i++){
    tankBullets[i].update();
    /*
    if ( tankBullets[i].x > (canvas.width + tankBullets[i].size) || tankBullets[i].x < (0 - tankBullets[i].size) || tankBullets[i].y > (canvas.height + tankBullets[i].size) || tankBullets[i].y < (0 - tankBullets[i].size) ){
      tankBullets[i].slice(i, 1);
      i -= 1;
    }
    */
  }
}
var TankBullet = function(size, angle, initColor, x, y){
  this.size = size;
  this.multiplierBool = false;
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.color = initColor;
  this.exhaust = [];
  this.update = function(){
    this.multiplierBool = !this.multiplierBool;
    var size = this.size;
    this.x += 10;//temp
    this.y += 10;//temp
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    //this.color += 10;
    //this.exhaust.push( new TankBulletExhaust(this.color, this.size) );
    for ( var i = 0; i < this.exhaust.length; i++){
      if (this.exhaust[i].update() ){
        this.exhaust.splice(i, 1);
        i -= 1;
      }
    }

    ctx.beginPath();
    ctx.arc(0,0, size, 0, Math.PI* 2);
    ctx.strokeStyle = "hsl(" + this.color + ", 100%, 55%)";
    ctx.fillStyle = 'black';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.7;
    ctx.stroke();
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fill();
    ctx.closePath();
    ctx.rotate(-1 * this.angle);
    ctx.translate( (-1 * this.x) , (-1 * this.y) );
  }
}

var TankBulletExhaust = function(color, size){
  this.x = 0;
  this.y = 0;
  this.dx = 0;
  this.dy = 10;
  this.ddx = Math.random() * 2 - 1;
  this.ddy = Math.random() * 2 - 1;
  this.color = color;
  this.globalAlpha = 0.3
  this.size = size;
  this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
    this.dx += this.ddx;
    this.dy += this.ddy;
    this.globalAlpha -= 0.05;
    this.size += 1;
    for ( var i = 0; i < 3; i++){
      ctx.beginPath();
      ctx.globalAlpha = this.globalAlpha;
      ctx.strokeStyle = "hsl(" + this.color + ", 100%, 60%)";
      ctx.fillStyle = 'hsl(' + this.color + ", 100%, 40%";
      ctx.lineWidth = this.size/8
      //ctx.arc(( (i - 1) * this.size/4 ) + (this.x - this.size/2), this.y - this.size/2, this.size, 0, Math.PI * 2);
      ctx.rect( ( (i - 1) * this.size/3 ) + (this.x - this.size/2), this.y - this.size/2, this.size, this.size);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }

    if (this.globalAlpha <= 0.1){
      return true;
    } else {
      false
    }
  }
}
