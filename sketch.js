const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,100);

    var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,900,70,80);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
  
}

