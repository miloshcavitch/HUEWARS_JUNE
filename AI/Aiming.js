var slopeToRadian = function(fromPos, toPos){
  var rise = fromPos.y - toPos.y;
  var run = fromPos.x - toPos.x;
  var slope = rise/run;
  var rad = Math.atan(slope) - Math.PI/2
  if (fromPos.x > toPos.x){
    rad += Math.PI;
  }
  return rad;

}

var degreesToSlope = function(degrees){

}
console.log( slopeToRadian({x:100,y:100},{x:200,y:200}) );

var rotateTowardsTarget = function(targetAngle, currentAngle, turnSpeed){
  var direction;
  if ( Math.abs(targetAngle - currentAngle) <= turnSpeed ){
    return targetAngle;
  }
  if ( Math.abs(targetAngle - currentAngle) <= Math.PI ){
    if (targetAngle > currentAngle){
      console.log('counterclockwise');
      direction = 'counter-clockwise'
    } else {
      console.log('clockwise');
      direction = 'clockwise'
    }
  } else {
      if ( targetAngle < currentAngle){
        console.log('counterclockwise');
        direction = 'counter-clockwise';
      } else {
        console.log('clockwise');
        direction = 'clockwise';
      }
  }
  if (direction === 'counter-clockwise'){
    turnSpeed *= -1;
  }
  currentAngle += turnSpeed;
  if (currentAngle > Math.PI * 2){
    currentAngle = Math.PI * 2 - currentAngle;
  }
  if ( Math.abs(currentAngle - targetAngle) < Math.abs(turnSpeed) ){
    return targetAngle;
  } else {
    return currentAngle;
  }
}

rotateTowardsTarget(Math.PI/4, Math.PI/4 * 7, 'one');

rotateTowardsTarget(Math.PI/4 * 2, 0, 'two');

rotateTowardsTarget(Math.PI, Math.PI/4 * 5, 'three');

rotateTowardsTarget(Math.PI , Math.PI/4 * 7, 'four');

rotateTowardsTarget(Math.PI/4 * 3, Math.PI/4 * 2, 'five');

rotateTowardsTarget(0, Math.PI/4 * 3, 'six');

rotateTowardsTarget(0, Math.PI/4 * 6, 'seven');
