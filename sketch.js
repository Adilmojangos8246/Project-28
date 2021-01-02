
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint


function preload()

{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	tree = new Tree(170,600,200,250)
 	 stone = new Stone(100,500,50,50);
 	 ground = new Ground(400,675,800,50);
 	 sling = new SlingShot(stone.body,{x:104,y:533});
 	 m1 = new mango(700,375,50,50);
	 m2 = new mango(600,300,50,50);
	 m3 = new mango(650,340,50,50);
	 m4 = new mango(560,300,50,50);
	 m5 = new mango(470,340,50,50);
	 m6 = new mango(760,340,50,50);
	 m7 = new mango(780,390,50,50);
	 boy = new Boy(170,600,200,250);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  ground.display();
  sling.display();
  tree.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  boy.display();

  detectollision(stone,m1)
  detectollision(stone,m2)	
  detectollision(stone,m3)
  detectollision(stone,m4)
  detectollision(stone,m5)
  detectollision(stone,m6)
  detectollision(stone,m7)

  

  drawSprites();
 
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.positon
	stoneBodyPosition = lstone.body.positon

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		 if(distance <= lmango.r + lstone.r){
			 Matter.body.setStatic(lmango,body,false)
		 }
}

function keypressed(){
    
    if (keyCode === 32 ){
      
        Matter.Body.setPosition(Stone.body, {x:235,y :420})
        sling.attach(Stone.body);
 }   
}  


