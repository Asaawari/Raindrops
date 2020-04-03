const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop1,bgImg;

function preload(){
    bgImg = loadImage("sprites/snow.png");
}

function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height + 400,1200,20)

    drop1 = new Drop(700,720,70,70);
    drop2 = new Drop(920,720,70,70);

    drop3 = new Drop(700,640,70,70);
    drop4 = new Drop(920,640,70,70);

    drop5 = new Drop(810,560,70,70);
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    console.log(Drop2.body.position.x);
    console.log(Drop2.body.position.y);
    console.log(Drop2.body.angle);
    drop1.display();
    drop2.display();

    drop3.display();
    drop4.display();

    drop5.display();
    
}