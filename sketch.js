const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonimag;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var slingshot;
var line1;

function preload(){
 polygonimage = loadImage("polygon.png")
}


function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world

   box1 = new b1(330,235,30,40);
   line1 = new lines(370,250,250,10);
   box2 = new b1(360,235,30,40);
   box3 = new b1(390,235,30,40);
   box4 = new b1(420,235,30,40);
   box5 = new b1(450,235,30,40);

   box6 = new b2(360,195,30,40);
   box7 = new b2(390,195,30,40);
   box8 = new b2(420,195,30,40);

   box9 = new b(390,155,30,40);

 polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);

        slingshot = new sling(this.polygon,{x:100,y:200});
 

  Engine.run(engine);

}

function draw() {
  background("white");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  line1.display();
  slingshot.display();
  imageMode (CENTER)
  image(polygonimage,polygon.position.x,polygon.position.y,50,50)
}


function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  slingshot.fly();
}
