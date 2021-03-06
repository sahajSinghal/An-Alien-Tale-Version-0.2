//name-spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//making variables for engine and world
var engine, world;

//making variables for player and ground
var player;
var ground;

//variables for platforms
var platform1, platform2, platform3, platform4, platform5;

function setup()
{
    //creating the canvas
    createCanvas(1200,800);

    //creating the engine and world
    engine = Engine.create();
    world = engine.world;

    //creating the player body
    player = new Player(100,765);

    //creating the ground body
    ground = new Ground(600,790,1200,20);

    //creating the platforms
    platform1 = new Platform(320,700,200,20);
    platform2 = new Platform(540,500,200,20);
    platform3 = new Platform(740,600,200,20);
    platform4 = new Platform(990,470,200,20);
    platform5 = new Platform(840,260,200,20);
        
    //running the engine
    Engine.run(engine);
}

function draw()
{
    //background is white
    background("white");

    //displaying and moving the player
    player.display();

    //displaying the ground
    ground.display();

    //displaying the platforms
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    platform5.display();

    //making sprites visible
    drawSprites();
}

//function keyPressed to move the player
function keyPressed()
{
    if(keyCode === RIGHT_ARROW)
    {
        Matter.Body.applyForce(player.body,player.body.position,{x : 20 , y : -100});
    }

    if(keyCode === LEFT_ARROW)
    {
        Matter.Body.applyForce(player.body,player.body.position,{x : -20 , y : -100});
    }
}