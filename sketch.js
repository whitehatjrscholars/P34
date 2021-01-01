var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;
 


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;  

    
  bob1 = new Pendulum(280, 700, "blue")
  bob2 = new Pendulum(340, 700, "red")
  bob3 = new Pendulum(400, 700, "orange")
  bob4 = new Pendulum(460, 700, "green")
  bob5 = new Pendulum(520, 700, "yellow")

  sling1 = new Sling(bob1.body,{x:280, y:100});
	sling2 = new Sling(bob2.body,{x:340, y:100});
	sling3 = new Sling(bob3.body,{x:400, y:100});
	sling4 = new Sling(bob4.body,{x:460, y:100});
	sling5 = new Sling(bob5.body,{x:520, y:100});
}
 


function draw() {
  background("black");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY});
}
