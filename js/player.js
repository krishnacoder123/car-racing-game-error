class Player{
    constructor(){
     this.name = null;
     this.distance = 0;
     this.index = null;
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            'playerCount':count
        })
    }
    update(){
        var playerref = 'palyers/player'+this.index;
        database.ref(playerref).set({
            name:this.name,
        distance:this.distance})
    }
   static getplayerinfo(){
      database.ref("players").on("value",(data)=>{
          allplayers = data.val();
      })
    }
}