var slopeToRadian = function(fromPos, toPos){
  var rise = fromPos.y - toPos.y;
  var run = fromPos.x - toPos.x;
  var slope = Math.abs(rise/run);
  if (fromPos.x < toPos.x){
    slope *= -1;
  }
  return (Math.atan(rise/run) + Math.PI/2);

}

var degreesToSlope = function(degrees){

}
