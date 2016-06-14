mouse = {x: 0, y: 0};
var testEmitter = new ExhaustEmitter(1, 1, tanks[0]);
$(document).on('mousemove', function(event){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  testEmitter.x = mouse.x;
  testEmitter.y = mouse.y;
})






var update = function(){
  updateStars();
  updateExhaustParticles();
  tanks.forEach(function(tank){
    tank.render();
  })
  tanks[0].headRotation = slopeToDegrees(tanks[0], mouse);
  //tanks[1].headRotation = slopeToDegrees(tanks[1], mouse);
}

setInterval(update, 20);
