class Player{
    constructor(){

    }

     getCount(){

        var playerCountRef= database.ref('playerCount');
         playerCountRef.on("value",function(data){
            playerCount= data.val();
            
        });

    }

    updateCount(playerCount){
       
        database.ref('/').update({
             playerCount:playerCount
        });
    }

}