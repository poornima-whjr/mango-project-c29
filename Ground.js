class Ground{
    constructor(){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(800, 600, 400, 20,options);
        World.add(world,this.body);    
    }

    

}
