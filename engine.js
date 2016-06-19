mouse = {x: 0, y: 0};
var testEmitter = new ExhaustEmitter(1, 1, tanks[0]);
$(document).on('mousemove', function(event){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  testEmitter.x = mouse.x;
  testEmitter.y = mouse.y;
})
$(document).on('click', function(){
  tanks.forEach(function(i){
    i.charging = true;
  });
});

input = {l: false, u: false, r: false, d: false};
$(document).keydown(function(e) {
    switch(e.which) {
        case 65:
        case 37: // left
        input.l = true;
        break;

        case 87:
        case 38:
        input.u = true; // up
        break;

        case 68:
        case 39:
        input.r = true; // right
        break;

        case 40:
        case 83:
        input.d = true; // down
        break;

        default: return; // exit this handler for other keys
    }
  });
  $(document).keyup(function(e) {
      switch(e.which) {
          case 65:
          case 37: // left
            input.l = false;
            break;

          case 68:
          case 39://right
            input.r = false;
            break;

          case 87:
          case 38:
            input.u = false;
            break;
          case 40:
          case 83:
          input.d = false; // up
          break;
          default: return; // exit this handler for other keys
      }
});
/////////////////
////////////////
//init star setup
for ( var i = 0; i < 2000; i++){
  initSetStars();
}
var exCount;
var update = function(){
  checkCanvasSize();
  exCount = 0;
  updateStars();
  updateTankBullets();
  tanks.forEach(function(tank){
    tank.render();
  })
  milo.render();
  milo.gunRotation += Math.PI/180;
  tanks.forEach(function(tank){
    tank.targetRotation = slopeToRadian(tank, milo);
    if (Math.abs(tank.headRotation - tank.targetRotation) > tank.turnSpeed ){
      tank.headRotation = rotateTowardsTarget(tank.targetRotation, tank.headRotation, tank.turnSpeed);
    } else {
      tank.headRotation = tank.targetRotation;
    }
  });
}
var titleScreen = function(){
  //renderLogo
  //renderText
  //all that good shit
}
var initWave = function(){
  //set level number/difficulty
  //
}
var wave = function(){
  //spawn enemies when neccesary
  //
}
var initDeath = function(){
  //start slowdown of star velocity
}
var death = function(){

}
var initBetweenLevels = function(){

}
var betweenLevels = function(){

}
var update = function(){
  checkCanvasSize();
  updateStars()
  //activeUpdate();
}
setInterval(update, 20);
