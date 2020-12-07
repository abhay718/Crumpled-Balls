class Bin{

    constructor(x,y,width,height){

   var options = {
  
    isStatic: true
    
   }


   this.bin = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image = loadImage("dustbingreen.png");

World.add(world,this.bin);



    }


    display(){
        fill("lightbrown");

        var posit = this.bin.position;
        //var radius = this.radius;

push();

//strokeWeight(4);
//stroke("green");

translate(posit.x,posit.y);


imageMode(CENTER);
image(this.image,0,0,this.width,this.height)


rectMode(CENTER);
rect(0,0,this.width,this.height);



pop();







    }

}