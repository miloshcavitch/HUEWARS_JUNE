var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
if (width * 0.5625 < height){
  canvas.width = window.innerWidth;
  canvas.height = width * 0.5625;
} else {// temp
  canvas.height = height;
  canvas.width = height * 1.7778;
}

var unit = canvas.width/1600;
