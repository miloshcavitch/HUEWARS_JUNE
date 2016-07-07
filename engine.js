mouse = {x: 0, y: 0};

$(document).bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        game.scrollColor += 5;
        if (game.scrollColor > 360){
          game.scrollColor = 5;
        }
    }
    else{
        game.scrollColor -= 5;
        if (game.scrollColor < 5){
          game.scrollColor = 360;
        }
    }
    e.preventDefault();
});
$(document).on('mousemove', function(event){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});
$(document).on('click', function(){
  activeClick();
});
var returnKeyFunction = function(){
  activeMode = function(){
    testUpdate();//to be changed to initLevel();
  }
  returnKeyFunction = function(){
    activeMode = function(){
      titleScreen();
    }
  }
  activeClick = function(){
    gameClick();
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
  updatePlayerBullets();
  updateExplosions();
  ai.update();
  ai.enemies.forEach(function(enemy){
    enemy.applyMovement();
    enemy.render();
  });
  milo.render();
  milo.checkCollision();
  ai.enemies.forEach(function(tank){
    tank.targetRotation = tank.headRotation = slopeToRadian(tank, milo) + Math.PI;
    tank.headRotation = tank.targetRotation;
  });
  renderPoints();
}
/////////////////////
////////////////////
var activeMode = function(){
  titleScreen();
}
//////////////////
/////////////////
var title = {colorIndex: 100, colorCount: 10};
var titleScreen = function(){
  if (Math.random() * 200 > 195) {
    screenBlinks.new();
  }
  renderPseudoSprite(logoHUE, ctx);
  renderPseudoSprite(gmu, ctx);
  updateScreenBlinks();
  logoHUE.colorArray[0] = "hsl(" + title.colorIndex + ", 100%, " + saturationVal + "%)";
  gmu.colorArray[0] = "hsl(" + title.colorIndex + ", 100%, " + saturationVal + "%)";
  title.colorIndex += 3;
  game.hitColor = title.colorIndex;
}
/////////////////////
/////////////////////
var game = {currentLevel: 1, points: 0, hitColor: 100, scrollColor: 0};
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

var renderPoints = function(){
  ctx.font = "20px Arial";
  ctx.fillColor = 'white';
  ctx.fillText(game.points + " points", 10, canvas.height - 200);
}
var renderReticule = function(){
  var initRay = [{x: mouse.x + (10 * unit), y: mouse.y},{x: mouse.x, y: mouse.y + (10 * unit)},{x: mouse.x - (10 * unit), y: mouse.y},{x: mouse.x, y: mouse.y - (10 * unit)}];
  var endRay = [{x: mouse.x + (20 * unit), y: mouse.y},{x: mouse.x, y: mouse.y + (20 * unit)},{x: mouse.x - (20 * unit), y: mouse.y},{x: mouse.x, y: mouse.y - (20 * unit)}];
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;
  ctx.strokeColor = "hsl(" + milo.color + ", 100%, " + saturationVal + "%)";
  for ( var i = 0; i < 4; i++){
    ctx.beginPath();
    ctx.moveTo(initRay[i].x, initRay[i].y);
    ctx.lineTo(endRay[i].x, endRay[i].y);
    ctx.stroke();
    ctx.closePath();
  }
}
var update = function(){
  checkCanvasSize();
  updateStars()
  activeMode();
  //activeUpdate();
  renderReticule();
}
setInterval(update, 20);
