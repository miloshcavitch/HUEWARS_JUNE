$('#resolution').click(function(event){
  console.log(event);
});
$('#exit').click(function(){
  $('#graphics-menu').css('display', 'none');
  console.log('event!');
});
var titleClick = function(){//tests to see if menu should be open
  var mouseX = mouse.x;
  var mouseY = mouse.y;
  //if correct area of screen is clicked
    $('#graphics-menu').css('display', 'block');
}
var gameClick = function(){//shoot the gun!

}
var activeClick = function(){
  titleClick();
}
