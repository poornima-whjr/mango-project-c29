class Ground{
    constructor(){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(800, 700, 200, 20);
        this.r = 20;
        World.add(world,this.body);    
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,200,20);
        pop();
        
    }

}
