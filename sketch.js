
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paperball,paperIMG;
var ground,dustbin1,dustbin2,dustbin3,dustbinIMG;
function preload(){
}

function setup() {
	var canvas = createCanvas(1600, 400);
    engine = Engine.create();
	world = engine.world;
	ground = new Ground(200, 200, 1600, 10);
	paperball = new Paper(100, 100, 70);

	dustbin3 = new Dustbin(870, 260, 150, 20);
	//dustbin1 = new Dustbin(880, 270, 20, 80);
	dustbin2 = new Dustbin(950, 270, 20, 80);
	
       
	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body, paperball.body.position, { x: 70, y: -70 });
	}
}


function draw() {
  background("pink");
	Engine.update(engine);
	paperball.display();
	//dustbin1.display();
	//dustbin2.display();
	dustbin3.display();
	fill("lightgreen")
	ground.display();
	
	Engine.update(engine);
  drawSprites();
 
}



