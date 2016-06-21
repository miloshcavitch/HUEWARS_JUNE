var ScreenBlink = function(length){
  this.currentFrame = 0;
  this.active = false;
  if (length === undefined){
    this.frameCount = Math.floor((Math.random() * 20) + 15);
  } else {
    this.frameCount = length;
  }
  var colors = 60;
  var space = 60;
  var stars = 0;

  this.colorGradient = [];
  this.spaceGradient = [];
  this.starGradient = [];


  var spaceInc = colorInc = 60/Math.floor(this.frameCount);
  var colors = 0;
  for ( var i = 0; i < this.frameCount; i++ ){
    space -= spaceInc;
    colors += colorInc;
    this.spaceGradient.push( Math.floor(space) );
    this.colorGradient.push( Math.floor(colors) );
  }

  var starInc = 100/Math.floor(this.frameCount/4);
  for ( var i = 0; i < Math.floor(this.frameCount * 3/4); i++){
    this.starGradient.push(stars);
  }
  for ( var i = 0; i < Math.ceil(this.frameCount/4); i++ ){
    stars += starInc;
    this.starGradient.push(stars);
  }

  ////end of constructor
  this.update = function(){
    this.currentFrame++;
    if (this.currentFrame >= this.frameCount){
      return false;
    } else {
      return true;
    }
  }
}
