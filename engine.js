mouse = {x: 0, y: 0};
$(document).on('mousemove', function(event){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
})
$(document).on('click', function(){
  enemies.forEach(function(i){
    i.charging = true;
  });
  screenBlinks.new(100);
});
var returnKeyFunction = function(){
  activeMode = function(){
    initLevel();
  }
  returnKeyFunction = function(){
    activeMode = function(){
      titleScreen();
    }
  }
}
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

        case 13:
        returnKeyFunction();
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
var testUpdate = function(){

  updateScreenBlinks();
  checkCanvasSize();
  exCount = 0;
  updateStars();
  updateTankBullets();
  enemies.forEach(function(enemy){
    enemy.render();
  });
  milo.render();
  milo.checkCollision();
  milo.gunRotation += Math.PI/180;
  enemies.forEach(function(tank){
    tank.targetRotation = slopeToRadian(tank, milo);
    if (Math.abs(tank.headRotation - tank.targetRotation) > tank.turnSpeed ){
      tank.headRotation = rotateTowardsTarget(tank.targetRotation, tank.headRotation, tank.turnSpeed);

    } else {
      tank.headRotation = tank.targetRotation;
    }
  });
}
/////////////////////
////////////////////
var activeMode = function(){
  testUpdate();
}
//////////////////
/////////////////
var title = {colorIndex: 100, colorCount: 10};
var titleScreen = function(){
  if (Math.random() * 200 > 195) {
    screenBlinks.new();
  }
  renderPseudoSprite(logoHUE, ctx);
  updateScreenBlinks();
  logoHUE.colorArray[0] = "hsl(" + title.colorIndex + ", 100%, " + saturationVal + "%)";
  //title.colorIndex += 3;
}
/////////////////////
/////////////////////
var game = {currentLevel: 1, points: 0};
var initLevel = function(){
  //starts level
}
var level = function(){
  //spawn enemies when neccesary
  //
}
/////////////
///////////////
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
  activeMode();
  //activeUpdate();
}
setInterval(update, 20);
