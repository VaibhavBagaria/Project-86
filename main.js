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

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        if (blockImageWidth > 10) {
            blockImageWidth = blockImageWidth - 10;
            blockImageHeight = blockImageHeight - 10;
            document.getElementById("current_width").innerHTML = blockImageWidth;
            document.getElementById("current_height").innerHTML = blockImageHeight;
        }
    }

    if (keyPressed == '38') {
        Up();
        console.log("Up")
    }
    if (keyPressed == '40') {
        Down();
        console.log("down")
    }
    if (keyPressed == '37') {
        Left();
        console.log("Left")
    }
    if (keyPressed == '39') {
        Right();
        console.log("Right")
    }
    if (keyPressed == '65') {
        New_Image('hulk_face.png')
        console.log("a")
    }
    if (keyPressed == '66') {
        New_Image('hulkd_body.png')
        console.log("b")
    }
    if (keyPressed == '67') {
        New_Image('hulk_legs.png')
        console.log("c")
    }
    if (keyPressed == '68') {
        New_Image('hulk_right_hand.png')
        console.log("d")
    }
    if (keyPressed == '69') {
        New_Image('hulk_left_hand.png')
        console.log("e")
    }
    if (keyPressed == '70') {
        New_Image('ironman_face.png')
        console.log("f")
    }
    if (keyPressed == '71') {
        New_Image('ironman_body.png')
        console.log("g")
    }
    if (keyPressed == '72') {
        New_Image('ironman_legs.png')
        console.log("h")
    }
    if (keyPressed == '73') {
        New_Image('ironman_right_hand.png')
        console.log("i")
    }
    if (keyPressed == '74') {
        New_Image('ironman_left_hand.png')
        console.log("j")
    }
    if (keyPressed == '75') {
        New_Image('spiderman_face.png')
        console.log("k")
    }
    if (keyPressed == '76') {
        New_Image('spiderman_body.png')
        console.log("l")
    }
    if (keyPressed == '77') {
        New_Image('spiderman_legs.png')
        console.log("m")
    }
    if (keyPressed == '78') {
        New_Image('spiderman_right_hand.png')
        console.log("n")
    }
    if (keyPressed == '79') {
        New_Image('spiderman_left_hand.png')
        console.log("o")
    }
    if (keyPressed == '80') {
        New_Image('thor_face.png')
        console.log("p")
    }
    if (keyPressed == '81') {
        New_Image('thor_right_hand.png')
        console.log("q")
    }
    if (keyPressed == '82') {
        New_Image('thor_left_hand.png')
        console.log("r")
    }
}


function Up() {
    if (playerY>0) {
        playerY=playerY-10
        console.log('up')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function Down() {
    if (playerY<580) {
        playerY=playerY+10
        console.log('down')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function Right() {
    if (playerX<780) {
        playerX=playerX+10
        console.log('right')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function Left() {
    if (playerX>0) {
        playerX=playerX-10
        console.log('left')
        canvas.remove(playerObject)
        playerUpdate()
    }
}