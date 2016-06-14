mouse = {x: 0, y: 0};
$(document).on('mousemove', function(event){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
  console.log(mouse);
})







var update = function(){
  updateStars();
  tanks.forEach(function(tank){
    tank.render();
  })
  tanks[0].headRotation = slopeToDegrees(tanks[0], mouse);
}

setInterval(update, 20);
