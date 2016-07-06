var playerBullets = [];
var updatePlayerBullets = function(){
  for (var i = 0; i < playerBullets.length; i++){
    playerBullets[i].update();

    if ( playerBullets[i].x > (1600 + playerBullets[i].size) || playerBullets[i].x < (0 - playerBullets[i].size) || playerBullets[i].y > (900 + playerBullets[i].size) || playerBullets[i].y < (0 - playerBullets[i].size) ){
      playerBullets.splice(i, 1);
      i -= 1;
    }
  }
}
