
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var treeImage, boyImage, mangoImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone, sling, ground;

function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");
	mangoImage = loadImage("mango.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground();

	//Create the Bodies Here.
	mango1 = new Mango(750,200);
	mango2 = new Mango(780,180);
	mango3 = new Mango(800,220);
	mango4 = new Mango(890,240);
	mango5 = new Mango(870,210);
	mango6 = new Mango(720,300);
	mango7 = new Mango(820,310);
	mango8 = new Mango(850,300);

	stone = new Stone(165,480);
	sling = new SlingShot(stone.body,{x:165,y:480});
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	 // Render.run(render);
}


function draw() {
	rectMode(CENTER);
	background("lightblue");
	imageMode(CENTER);
	image(treeImage,800,350,300,500);
	image(boyImage,200,530,100,200);
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	stone.display();
	sling.display();
	ground.display();
	detectCollision(mango1,stone);
	detectCollision(mango2,stone);
	detectCollision(mango3,stone);
	detectCollision(mango4,stone);
	detectCollision(mango5,stone);
	detectCollision(mango6,stone);
	detectCollision(mango7,stone);
	detectCollision(mango8,stone);
	
}


function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	
	sling.fly();
}

function detectCollision(lmango,lstone){
	

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  

  	if(distance<=lmango.r+lstone.r)
    {
	  console.log(distance);
	  console.log(lmango.r+lstone.r);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


function keyPressed(){
	console.log(keyCode);
	if (keyCode === 32){
		Body.setPosition(stone.body,{x:165, y:480});
		sling.attach();
		
	}
}