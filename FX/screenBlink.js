var ScreenBlink = function(length){
  console.log(length);
  this.currentFrame = 0;
  this.active = false;
  if (length === undefined){
    this.frameCount = Math.floor((Math.random() * 30) + 6);
  } else {
    this.frameCount = length;
  }
  var colors = 60;
  var space = 0;
  var stars = 100;

  this.colorGradient = [];
  this.spaceGradient = [];
  this.starGradient = [];


  var spaceInc = colorInc = 60/Math.floor(this.frameCount/2);
  for ( var i = 0; i < Math.floor(this.frameCount/2); i++ ){
    space += spaceInc;
    this.spaceGradient.push( Math.floor(space) );
  }
  space = 60;
  for ( var i = 0; i < Math.ceil(this.frameCount/2); i++ ){
    space -= spaceInc;
    if (space < 0){
      space = 0;
    }
    this.spaceGradient.push( Math.floor(space) );
    this.colorGradient.push( Math.floor(space) );//same numbers except they come first
  }
  space = 0;
  for ( var i = 0; i < Math.floor(this.frameCount/2); i++){
    space += spaceInc;
    this.colorGradient.push( Math.floor(space) );
  }

  var starInc = 100/Math.floor(this.frameCount/2);
  var star = 100;
  for ( var i = 0; i < Math.floor(this.frameCount/2); i++){
    star -= starInc;
    this.starGradient.push( Math.floor(star) );
  }
  star = 0;
  for ( var i = 0; i < Math.ceil(this.frameCount/2); i++){
    star += starInc;
    this.starGradient.push( Math.floor(star) );
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



//space gradient = 0 +
var starGradientKey = [50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 43, 72];
var spaceGradientKey = [8, 16, 24, 32, 40, 48, 56, 56, 48, 40, 32, 24, 16, 8, 0];
var logoGradientKey = [52, 44, 36, 28, 20, 12, 4, 0, 8, 16, 24, 32, 40, 48, 56];
