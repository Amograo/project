
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,hammer,rubber; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(200,390,2000,20)
    stone = new Stone(700,320,70,70); 
    hammer = new Hammer(400,320,200,70);
    rubber= new Rubber(500, 350,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  ground.display();
  stone.display();
  hammer.display();
  rubber.display();
  
  drawSprites();
 
}



