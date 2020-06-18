var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	pig1 = new Paper(810, 350, 50);
	wall1 = Bodies.rectangle(570,600, 20,100,{isStatic:true});
	World.add(world, wall1);
	
	wall2 = Bodies.rectangle(670,640, 200,20,{isStatic:true});
	World.add(world, wall2);
	
	wall3 = Bodies.rectangle(770,600, 20,100,{isStatic:true});
	World.add(world, wall3);

	


	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER);  
  rect(wall1.position.x,wall1.position.y,20,100);
  rect(wall3.position.x,wall3.position.y,20,100);
  rect(wall2.position.x,wall2.position.y,200,20);
   text(mouseX+" "+mouseY,600,550);
pig1.display();
   keyPressed();

   drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyforce(paperObject.body,paperObect.body.position,{x:85,y:-85})
	}
}


