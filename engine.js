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

input = {h: 0, v: 0};
$(document).keydown(function(e) {
    switch(e.which) {
        case 65:
        case 37: // left
        input.h = -1;
        console.log(input.l);
        break;

        case 87:
        case 38:
        input.v = -1; // up
        break;

        case 68:
        case 39:
        input.h = 1; // right
        break;

        case 40:
        case 83:
        input.v = 1; // down
        break;

        default: return; // exit this handler for other keys
    }
  });
  $(document).keyup(function(e) {
      switch(e.which) {
          case 65:
          case 37: // left
          case 68:
          case 39://right
          input.h = 0;
          break;

          case 87:
          case 38:
          case 40:
          case 83:
          input.v = 0; // up
          break;
          default: return; // exit this handler for other keys
      }
});

var exCount;
var update = function(){
  exCount = 0;
  updateStars();
  updateTankBullets();
  tanks.forEach(function(tank){
    tank.render();
  })
  milo.render();
  milo.x += 1;
  milo.gunRotation += Math.PI/180;
  tanks[0].headRotation = slopeToDegrees(tanks[0], mouse);
  //tanks[1].headRotation = slopeToDegrees(tanks[1], mouse);
  console.log(exCount)
}

setInterval(update, 20);
