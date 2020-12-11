const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var slingshot;


function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world

   box1 = new box(330,235,30,40);
   box2 = new box(360,235,30,40);
   box3 = new box(390,235,30,40);
   box4 = new box(420,235,30,40);
   box5 = new box(450,235,30,40);

   box6 = new box1(360,195,30,40);
   box7 = new box1(390,195,30,40);
   box8 = new box1(420,195,30,40);

   box9 = new box2(390,155,30,40);

 polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);

        slingshot = new slingshot(this.polygon,{x:100,y:200});
 

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
  sling.display();
}


function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}
