const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


//render

var bin1,bin2,bin3;
var ball1;
var side1,side2,side3,side4;
var engine,world;
//var binimg;
var bini,bin
//function preload(){}


function preload(){

bini = loadImage("dustbingreen.png")

}










function setup() {
	
	createCanvas(1000, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//binimg = new Bini(840,605,180,150);
	bin = createSprite(835,597,180,150);
    bin.addImage("hello!",bini)
	//bin.visible = false;
	
	side1 = new Ground(width/2,height-10,width,20);
	side2 = new Ground(width/2,height-690,width,20);
	side3 = new Ground(width-10,height/2,20,height);
	side4 = new Ground(width-990,height/2,20,height);

	ball1 = new Ball(100,600,25);
	
	console.log(ball1.body);

	bin1 = new Bin(835,height-25,150,15)
	bin2 = new Bin(765,605,15,150)
	bin3 = new Bin(905,605,15,150)

	//bin1 = new Bin()

    newArray = [2,4,2,4];

	var render = Render.create({         //curly brackets are options                // drawing bodies without ther rect real world 
		element: document.body,   // this document.body is so that everything is to be done in the respective document of the corresponding body...
		engine: engine,          //to include the engine in this render
		options: {
		  width: 800,
		  height: 700,
		  wireframes: false
		}
	  });
		
	  bin.scale = 0.5

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

textSize(25)
  text("Use UP, LEFT and RIGHT arrow keys",25,400);

  bin1.display();
  bin2.display();
  bin3.display();

  //binimg.display();
  
  ball1.display();

  side1.display();
  side2.display();
  side3.display();
  side4.display();
 
  drawSprites();
  
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-100});
  
	}

	if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:0});
	
	  }

	  if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:0});
	
	  }

	
}

