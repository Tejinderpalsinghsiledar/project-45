var input , gameState
var button
var start,startimage
var road, roadimge
var player
var invisibleground
var time
var obsiltale
var racerimage1,racerimage2

function preload(){
startimage= loadImage("start.png");
roadimage= loadImage("track.jpg");
racerimage1 = loadImage("bikeracer.png")
racerimage2 = loadImage("moto.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-100);
 input=createInput()
 gameState = "start"
start  = createSprite(700,400,1,1);
road = createSprite(displayWidth/2,displayHeight/2,1,1)
player = createSprite(100,600,1,1)
invisibleground= createSprite(displayWidth/2,displayHeight-100,displayWidth,10)
invisibleground.visible=false;
obsiltale = createSprite(400,600,100,100)
}


function draw() {
  background(100);  
if  (gameState === "start"){
  input.position(300,400);
  start.addImage(startimage)
  start.scale = 0.5;
 if (mousePressedOver(start)){
   gameState = "PLAY"
 }
 drawSprites();
}
if(gameState === "PLAY"){
  player.addImage("player",racerimage1)
  player.scale = 0.3
  input.hide()
  start.destroy()
  background("black")
  road.addImage(roadimage);
  road.scale = 5
  
  if(keyWentDown(UP_ARROW)&&player.y>450){
    player.velocityY = -8
  player.velocityX = 0
  road.velocityX = -4;
  
  
  }
  if(keyDown(UP_ARROW)){
    
  }
  if(road.x<0){
    road.x= road.width/2;
  }
  console.log(player.y)
  player.velocityY=player.velocityY+0.1
    player.collide(invisibleground)

   if (keyWentDown(RIGHT_ARROW)){
    player.velocityY = 0
    player.velocityX = 4
   } 
   if (keyWentUp(RIGHT_ARROW)){
    player.velocityY =0 ;
    player.velocityX =0;
  }
  drawSprites();
time=Math.round(frameCount/20)
text("Time"+time,1000,50)
if (player.isTouching(obsiltale)){
  //player.velocityY=-8
  player.destroy()

}
}


  

}