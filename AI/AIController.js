

var AIController = function(level){
  this.enemies = [];
  this.killedCount = 0;
  this.movements = [];
  this.level = level;
  this.spawnPos = {x: 0, y: 0};
  this.spawnCounter = 0;
  this.moveCounter = 0;
  this.moveIndex = 0;
  this.spawner = function(){
    if (this.enemies.length < 4 && Math.random() > 0.97){//could add more of these to keep it interesting

    }
  }
  this.update = function(){
    this.moveCounter++;
    if (this.moveCounter > 25){
      newTankMovement(this.enemies[this.moveIndex], Math.random() * 1600, Math.random() * 900);
      this.enemies[this.moveIndex].charging = true;
      this.moveCounter = 0;
      this.moveIndex++;
      if (this.moveIndex >= this.enemies.length){
        this.moveIndex = 0;
      }
    }
  }
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

var newTankMovement = function(tank, destX, destY){
  tank.moving = true;
  tank.moveFrame = 0;
  var nuevo = setSlopeSpeed( (destX - tank.x), (destY - tank.y), tank.handling);
  tank.horizontalMomentum = nuevo.x;
  tank.verticalMomentum = nuevo.y;
  var zeroToSixty = Math.floor(tank.maxSpeed/tank.handling);//how many frames to get from zero to max speed
  var tankX = tank.x
  var count = 0;
  var speed = tank.handling
  for ( var i = 0; i < zeroToSixty; i++){
    var inc = setSlopeSpeed( (tank.x - destX), (tank.y - destY), speed);
    speed += tank.handling
    tankX += inc.x;
    count++;
  }
  var slowDownLength = Math.abs(tankX - tank.x);//distance needed to go from max to stop
  var max = setSlopeSpeed( (tank.x - destX), (tank.y - destY), tank.maxSpeed);

  tank.moveFrameMax = 50;
}

var ai = new AIController();
for (var i = 0; i < 4; i++){
  ai.enemies.push(new SpaceTank(Math.random() * 1355, Math.random() * 500) );
}
