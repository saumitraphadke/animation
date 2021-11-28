var bg, bgimg;

function preload(){
bgimg=loadimage("bgimg");
}
function setup() {
  createCanvas(800,400);
  bg=createSprite(400, 200, 50, 50);
  bg.addImage(bgimg)
}

function draw() {
  background("bg");  
  drawSprites();
}