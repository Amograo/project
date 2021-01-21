class Rubber{

    constructor(x,y,radius){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
        
          }
        
          this.body = Matter.Bodies.circle(x, y, radius, options) 
          this.radius = radius;
          World.add(world,this.body);
    }

    display(){
        push()
        stroke("white")
        fill("green")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius)
        pop()
    }
}
