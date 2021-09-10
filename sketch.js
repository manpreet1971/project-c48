var database;


var gameState=0,trex,ground,invisibleGround;
var form,game;
var playerCount=0;
var player;
function setup(){
    createCanvas(800,200);
    
    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();
    

   
   
}

function draw(){

  if(playerCount===1){
      game.update(1);
  }
  if(gameState===1){
      clear();
      game.play();
  }
    

}



