//class for the ground
class Ground
{
    //constructor which accepts x, y, width, height
    constructor(x,y,width,height)
    {
        //making the ground have a bit of friction and making it static
        var options =
        {
            friction : 2000,
            isStatic : true,
        }

        //making the ground's body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //adding it to the world
        World.add(world,this.body);
    }

    display()
    {
        //creating the rectangular body 
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}