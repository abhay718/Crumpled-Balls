class Ground{

    constructor(x,y,width,height){

   var options = {
  
    isStatic: true
    
   }


   this.gr = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;


World.add(world,this.gr);



    }


    display(){
        fill("grey");

        var positi = this.gr.position;
        //var radius = this.radius;

push();

//strokeWeight(4);
//stroke("green");

translate(positi.x,positi.y);

rectMode(CENTER);
rect(0,0,this.width,this.height);

pop();







    }

}