var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var energyDrink, energyDrinkGroup;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png")
  energyDrinkImg = loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
leftBoundary.visible = true;
leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

energyDrinkGroup = createGroup();

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}

if(energyDrinkGroup.isTouching(boy)){
  boy.velocityY = boy.velocityY + 2; 

}

spawnEnergydrink()


  drawSprites();
}


function spawnEnergydrink() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    EnergyDrink = createSprite(600,100,40,10);
    EnergyDrink.addImage(energyDrinkImg)
    EnergyDrink.x = Math.round(random(60,300))
    EnergyDrink.scale = 0.1;
    EnergyDrink.velocityY = 2;
    EnergyDrink.lifetime = 200;

    EnergyDrink.lifetime = 150
    
    EnergyDrink.depth = boy.depth
    boy.depth = boy.depth + 1;

    energyDrinkGroup.add(EnergyDrink);
    }
  }
