var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImg
var leafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);





//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX

  if(garden.y<200){
    garden.y = 250
  }

  var number = Math.round(random(1,2))

  if(frameCount%60 == 0){
    if(number == 1){
      createApple
    }
    else{
      createLeaf
    }
  }
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10)
  apple.addImage(appleImg)
  apple.scale = 0.05
  apple.velocityY = 1
}

function createLeaf(){
  leaf = createSprite(random(50, 350), 40, 10, 10)
  leaf.addImage(leafImg)
  leaf.scale = 0.05
  leaf.velocityY = 1
}