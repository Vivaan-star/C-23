//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;
var ball;
var box1, box2;
var ground;

function setup() {
  createCanvas(800,400);   

  myEngine = Engine.create();
  myWorld =  myEngine.world;


  box1 = new Box(200,300,50,50);
  box2 = new Box(240,150,50,100);
  ground = new Ground(400,390,800,20);
  


}

function draw() {
  background(0);  
  Engine.update(myEngine);
  
  
  box1.display();
  box2.display();
  ground.display();
}

/*
how we can use physics Engine

3 objects of Matter.js

1. Engine : this object is used to create a physics engine.
2. World : this object is used to create a physics world.
3. Bodies : this object is used to create the physical objects.


*/