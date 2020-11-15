var helicopterIMG, helicopter , package,packageIMG;
var packageBody,ground,packageImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(900,600);
	rectMode(CENTER);
	

	package=createSprite(300, 200, 10,10);
	package.addImage(packageImg)
	package.scale=0.2

	helicopter =createSprite(width/2, 200, 10,10);
	helicopter .addImage(helicopterIMG)
	helicopter .scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyCode === DOWN_ARROW) {
	package.x = width/2
	package.y = 200;
	package.isStatic = false;
 }
 drawSprites();
}