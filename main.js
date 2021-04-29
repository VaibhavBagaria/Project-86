var canvas=new fabric.Canvas('myCanvas');
blockImageObject="";

playerX=10;
playerY=10;
playerObject="";
blockImageWidth=30;
blockImageHeight=30;

function playerUpdate() {
    fabric.Image.fromURL("player.png",function(Img){
     playerObject=Img;
     playerObject.scaleToWidth(50);
     playerObject.scaleToHeight(150);
     playerObject.set({
         top:playerY,
         left:playerX
     });
     canvas.add(playerObject)
    });
}


function New_Image(getImage) {
    fabric.Image.fromURL(getImage,function(Img){
     blockImageObject=Img;
     blockImageObject.scaleToWidth(blockImageWidth);
     blockImageObject.scaleToHeight(blockImageHeight);
     blockImageObject.set({
         top:playerY,
         left:playerX
     });
     canvas.add(blockImageObject)
    });
}