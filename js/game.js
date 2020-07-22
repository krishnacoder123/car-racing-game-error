class Game{
    constructor(){
    
    }
getState(){
    var gamestateref = database.ref('gamestate');
    gamestateref.on("value",function(data){
        gameState = data.val();
    })
}
update(state){
    database.ref('/').update({
        'gameState':state
    })
}
async start(){
  if( gameState == 0){
      player = new Player();
      var playerCountref = await database.ref('playerCount').once("value");
      if(playerCountref.exists()){
    playerCount = playerCountref.val();
    player.getCount();
}      
      form = new Form();
      form.display();
  }
}
play(){
    form.hide();
    player.getplayerinfo();
    if(allpalyers!==undefined){
        var displayposition = 130;
        for(var plr in allplayers){
            if (plr =="player"+player.index){
                fill("red")
            }
            else{
                fill("balck")
            }
            displayposition = displayposition + 20 ;
            text(allplayers[plr].name+" : "+allplayers [plr].distance ,120,displayposition)
        
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distace = player.distance + 50;
        player.update();
    }
}
}