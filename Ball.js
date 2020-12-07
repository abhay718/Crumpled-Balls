class Ball{

    constructor(x,y,radius){

   var options = {
  
    restitution: 1,
    density: 1.2,
    friction: 1.0,
    //frictionAir: 10,
   }


   
   this.x = x;
   this.y = y;
   this.radius = radius;
   this.image = loadImage("download.png")
   this.body = Bodies.circle(this.x,this.y,this.radius,options);


World.add(world,this.body);



    }


    display(){
        fill("white");

        var posi = this.body.position;
        //var radius = this.radius;

push();

//strokeWeight(4);
//stroke("green");

translate(posi.x,posi.y);


imageMode(CENTER);
image(this.image,0,0,this.radius*3,this.radius*3)



//ellipseMode(CENTER);
//ellipse(0,0,this.radius*2,this.radius*2);

pop();

  }
}