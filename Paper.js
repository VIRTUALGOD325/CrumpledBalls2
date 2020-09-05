class Paper{
    constructor(){
        var options={
            restitution:1.0,
            density:1.0,
            friction:1.0
        }
        this.paper=Bodies.circle(100,400,20, options);
        this.radius=20;
        World.add(world,this.paper)
    }

    
}