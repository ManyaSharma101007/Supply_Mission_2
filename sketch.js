var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	

//	packageSprite=createSprite(width/2, 200, 10,10);
//	packageSprite.addImage(packageIMG)
//	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground =new Ground(width/2, 650, width, 10);

	baseBody = new Basket(width/2,640,150,20);
	rightBody = new Basket(475,600,10,80);
	leftBody = new Basket(325,600,10,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 Engine.update(engine)
  rightBody.display();
  leftBody.display();
  baseBody.display();
  ground.display();
  
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);
    
  }
}



