class Mango{
    constructor(x,y){
        var options={
            restitution : 0,
            friction : 1,
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.r = 20;
        World.add(world,this.body);    
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(mangoImage,0,0,40,40);
        pop();
        
    }

}
