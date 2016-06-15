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
  this.update = function(){
    this.multiplierBool = !this.multiplierBool;
    var size = this.size;

    //this.color += 10;
    this.x += 10;//temp
    this.y += 10;//temp
    ctx.beginPath();
    ctx.arc(this.x,this.y, size, 0, Math.PI* 2);
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
  }
}
