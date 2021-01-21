class Hammer{

    constructor(x,y,width,height){
        var options = {
            restitution: 0.5,
            friction: 1.0,
            density: 2.0,
        
          }
        
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.height = height
          this.width = width
          World.add(world,this.body);
    }

    display(){
        push()
        stroke("white")
        fill("orange")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}
