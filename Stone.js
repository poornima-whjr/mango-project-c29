class Stone{
    constructor(x, y) {               
        var options = {
            'restitution':8,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.r = 15;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();
      }
}