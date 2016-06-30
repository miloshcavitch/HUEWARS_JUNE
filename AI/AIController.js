var enemies = [];
for (var i = 0; i < 1; i++){
  enemies.push(new SpaceTank(Math.random() * 1355, Math.random() * 500) );
}


var AIController = function(level){
  this.enemies = [];
  this.movements = [];
  this.level = level;
  this.spawnPos = {x: 0, y: 0};
  this.spawnCounter = 0;
  this.moveCounter = 0;
  switch (this.level){
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
    break;
  }

}

var TankMovement = function(index, startX, startY, endX, endY, steps){
  this.ddx;
  this.ddy;
  this.frameCount;
  this.currentFrame = 0;
  
}


var ai = new AIController();
