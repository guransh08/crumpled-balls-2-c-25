
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ball,ground

function setup() {
	createCanvas(800*2, 400);


	engine = Engine.create();
	world = engine.world;

	
	
    ball1=new Paper(300,100)
    var g1 ={
      isStatic: true
  }
    ground=Bodies.rectangle(800,390,1600,20,g1);
    World.add(world,ground)
   // b1=new Ground(935,315,20,100)
   
    dustbin=new Ground(1000,250)
   // b3=new Ground(1115,315,20,100)
   // b2=new Ground(1025,370,200,20)
  
}


function draw() {
	Engine.update(engine);
  
  background(0);

  
console.log(ground.position.x)
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,1600,20);
  
  
  ball1.display();
  
  //b1.display();
  //b3.display();
  //b2.display();
  dustbin.display();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball1.body,ball1.position,{x:65,y:-85});
}

}
