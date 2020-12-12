
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var box1, box2, box3;
var dustbin, dustbinImage;
var paperGo, paperImage



function preload()
{
	dustbinImage = loadImage("dustbingobr.png");
	paperImage = loadImage("paperballbr.png")
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(830, 600, 20, 100);

	box3 = new Box(910, 600, 20, 100);

	box2 = new Box(875, 650, 100, 20);

	ground = new Ground(800, 675, 1600, 20);

	paper = new Paper(20, 650);

	dustbin = createSprite(875, 610, 200, 20);
	dustbin.addImage("dustbin1", dustbinImage);
	dustbin.scale = 0.4;


	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1200,
	// 	  height: 700,
	// 	  wireframes: false
	// 	}
	//   });

	  //Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display();
  box3.display();
  box2.display();
  ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:78, y:-85})





		
	}


}



