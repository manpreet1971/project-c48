class Game{
   
    constructor(){}
     getState(){
         var gameStateRef=database.ref('gameState');
         gameStateRef.on("value",function(data){
         gameState= data.val();
        });
    }
      update(state){
        gameState=state;
        database.ref('/').update({
            gameState:state
        })
    }   

     async start(){

        if(gameState===0){

           player=new Player();


           var playerCountRef=await database.ref('playerCount').once("value");

           if(playerCountRef.exists()){
              
                 player.getCount();
                
           
            }
           form=new Form();
           form.display();
               
            trex = createSprite(50,160,20,50);
           // trex.addAnimation("running", trex_running); 
            // trex.addAnimation("collided", trex_collided);
           trex.scale=0.5;
           trex.x=50;
            ground=createSprite(200,180,800,20);
            //ground.addImage("ground2",groundImage);
           ground.x=ground.width/2;
           trex.setCollider("rectangle",0,0,400,trex.height);
            
            //gameState = PLAY;
           invisibleGround=createSprite(200,190,400,10);
          invisibleGround.visible=false;
         }

        
     }

     play(){

        drawSprites();
        form.disappear();
        textSize(40);
        text('Game Start!',120,100);
        ground.velocityX= -3
        if (keyDown("space") && trex.y>=160)
        {
            trex.velocityY=-13;//when space key pressed
     // jumpSound.play();
        }
            trex.velocityY=trex.velocityY+0.8;
        if(ground.x<0)
        { 
         ground.x=ground.width/2;
        }
    
        trex.collide(invisibleGround);           
    }

  


}