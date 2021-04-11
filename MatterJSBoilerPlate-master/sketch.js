const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2, bob3, bob4, bob5;
var balls = [];
function preload()
{
	
}

function setup() {
        createCanvas(1000, 800);

        box =new Box(500,780,50,50)
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

roof = new Ground(400,200,500,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if(frameCount%60===0){
     balls.push(new Ball(random(width/2-300, width/2+300), 10,10));
   }
 
        for (var j = 0; j < particles.length; j++) {
     balls[j].display();
   }
  

  roof.display()
  box.display()
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
	if (mousePressed){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-3})
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-5,y:-3})
    console.log("I exist")
	
	}
}
