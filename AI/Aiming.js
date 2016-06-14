var slopeToDegrees = function(fromPos, toPos){
  var rise = fromPos.y - toPos.y;
  var run = fromPos.x - toPos.x;
  var slope = rise/run;
  return (Math.atan(rise/run) * 180/Math.PI) + 90;
  console.log( (Math.atan(rise/run) * 180/Math.PI) + 90 )
}

var degreesToSlope = function(degrees){

}
console.log( slopeToDegrees({x:100,y:100},{x:200,y:200}) );
