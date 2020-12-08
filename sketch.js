var helicopterImage, helicopter, package,packageImage;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bb,bl,br;

function preload()
{
	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageImage)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale = 0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageprop = {
		resistution: 1.5,
		isStatic:true
	}

	packageBody = Bodies.circle(width/2,200,5,packageprop);
	World.add(world, packageBody);
	
	groundprop = {
		isStatic:true
	}

	ground = Bodies.rectangle(width/2,650,width,10,groundprop);
	 World.add(world, ground);
	 
	 bb = new Box(400,640,300,20);
	 bl = new Box(280,630,20,150);
	 br = new Box(580,630,20,150)

	 keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  bb.display();
  bl.display();
  br.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key
    Matter.Body.setStatic(packageBody,false);
  }
}



