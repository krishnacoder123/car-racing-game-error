class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton("Join");
     this.greeting = createElement("h3")
    }
  display(){
      var title = createElement('h2');
      title.html("Car Racing game")
      title.position(130,20);
      
      this.input.position(180,100);
      
      this.button.position(200,200);
      

      this.button.mousePressed( ()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount += 1
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello" + player.name);
          this.greeting.position(130,160);
      })
  }  
  hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
  }
}