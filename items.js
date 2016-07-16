var floorItems = [];

var updateFloorItems = function(){
  floorItems.forEach(function(item){
    item.update();
    if ( Math.hypot(Math.abs(item.x - milo.x), Math.abs(item.y - milo.y) ) <= 40){
      item.use();
      console.log('item!');
    }
  });
}
