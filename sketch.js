var seacreateSprite;(200,200,20,20);
var seaImg

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg.addImage(sea.png);
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(200,200,20,20)
 sea.addImage(seaImg)
 shipImg1=createSprite(100,275,20,20)
 shipImg1.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 shipImg1.scale=0.25
}

function draw() {
  background("blue");
  if(sea.x<0) {
    sea.x=sea.width/2;
 }
 drawSprites();
}