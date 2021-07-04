var ship, shipMoving, edges;
var ocean, oceanMoving;

function preload(){
  shipMoving = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
  oceanMoving = loadImage("sea.png");

}

function setup(){

  createCanvas(600,400);

  sea = createSprite(300,100,600,400);
  sea.addImage(oceanMoving);
  sea.velocityX = -4

  ship = createSprite(120,235,150,80);
  ship.scale = 0.2
  ship.addAnimation("moving", shipMoving);
}

if (sea.x<0){
  sea.x = sea.width/2;
}

function draw(){

  drawSprites();
}