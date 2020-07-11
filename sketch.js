var ground;


function setup() {
  createCanvas(800,400);
  
  ground = new Ground(200,780,1200,20);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}