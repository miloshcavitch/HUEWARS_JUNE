$('#resolution').change(function(event){
  console.log(event.target.valueAsNumber);
  switch(event.target.valueAsNumber){
    case 0:
      document.body.style.zoom = "300%";
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
  }
});
$('#sensitivity').change(function(event){
  game.scrollSensitivity = event.target.value * 0.2;
});
$('#exit').click(function(){
  $('#mouse-sensitivity-menu').css('display', 'none');
  game.paused = false;
  running = setInterval(update, 20);
  console.log('event!');

});
var titleClick = function(){//tests to see if menu should be open
  var mouseX = mouse.x;
  var mouseY = mouse.y;
  console.log(mouseX + ", " + mouseY);
  console.log(msShape.yCenter + (unit * msShape.height * msShape.shapes[0].positions[0].y));
  console.log(msShape.yCenter + (unit * msShape.height * msShape.shapes[15].positions[4].y));
  //ctx.rect(unit * 1220, unit * 90, unit * 250, unit * 90);
  if (mouseX >= unit * 1220 && mouseX <= unit * (1220 + 250) && mouseY >= unit * 90 && mouseY <= unit * (180) ){
    $('#mouse-sensitivity-menu').css('display', 'block');
  }
}
var gameClick = function(){//shoot the gun!
  milo.shootBullet();
}
var activeClick = function(){
  titleClick();
}
