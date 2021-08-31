
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin,paper,ground,engine;
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
    

	engine = Engine.create();
	world = engine.world;
	paper=new Paper(40,40,20);
	dustbin=new Dustbin(1000,450);
	ground=new Ground(600,400);
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  
  paper.display();
  dustbin.display();
  ground.display();
  
  
 
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}




