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
$('#exit').click(function(){
  $('#graphics-menu').css('display', 'none');
  console.log('event!');

});
var titleClick = function(){//tests to see if menu should be open
  var mouseX = mouse.x;
  var mouseY = mouse.y;
  console.log(mouse.x + ", " + mouse.y);
  console.log(gmu.xCenter + ", " + (gmu.xCenter + (gmu.width * 0.5)) )
  if (mouse.x <= (gmu.xCenter + (gmu.width * 0.5)) * unit && mouse.x >= (gmu.xCenter - (gmu.width * 0.5)) * unit && mouse.y <= (gmu.yCenter + (gmu.height * 0.5)) * unit && mouse.y >= (gmu.yCenter - (gmu.height * 0.5)) * unit ){
    $('#graphics-menu').css('display', 'block');
    console.log('bruh');
  }
}
var gameClick = function(){//shoot the gun!
  milo.shootBullet();
}
var activeClick = function(){
  titleClick();
}
