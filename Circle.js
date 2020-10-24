class Circle {
    constructor(x,y,color) {
        var object_options = {
            isStatic:false,
            restitution : 1
        }
    
        this.body = Bodies.circle(x,y,20,object_options) 
        this.color = color
        World.add(world,this.body);
    }

    display() {
        push()
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
        pop()
    }
}