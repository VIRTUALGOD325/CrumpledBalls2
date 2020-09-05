
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;

var world;

var ballIMG;

var dustbin,dustbinIMG;

function preload()
{
   ballIMG=loadImage("paper.png");
   dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	ball=createSprite(width/2, 100, 10,10);
	ball.addImage("paper", ballIMG);
	//ball.scale=3;

	engine = Engine.create();
	world = engine.world;



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dustbin=createSprite(width/2, 500, 10,10);
	dustbin.addImage("dustbin", dustbinIMG);

	

	World.add(world, ball);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if(mousePressedOver(ball)){
	  ball.velocityY = 3;
  }

  drawSprites();
 
}




