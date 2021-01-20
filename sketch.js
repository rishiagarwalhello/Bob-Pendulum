const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bob1, bob2, bob3, bob4, bob5; //Bobs
var roof1, roof2, roof3, roof4, roof5; //Roof
var rope1, rope2, rope3, rope4, rope5; //Ropes

function setup()
{
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	roof1=new Roof(450, 50, 600, 25);
	roof2=new Roof(550, 50, 600, 25);
	roof3=new Roof(650, 50, 600, 25);
	roof4=new Roof(750, 50, 600, 25);
	roof5=new Roof(850, 50, 600, 25);
	
	bob1=new Bob(450, 450, 45);
	bob2=new Bob(550, 450, 45);
	bob3=new Bob(650, 450, 45);
	bob4=new Bob(750, 450, 45);
	bob5=new Bob(850, 450, 45);
	
	rope1=new Rope(roof1.body, bob1.body);
	rope2=new Rope(roof2.body, bob2.body);
	rope3=new Rope(roof3.body, bob3.body);
	rope4=new Rope(roof4.body, bob4.body);
	rope5=new Rope(roof5.body, bob5.body);
}

function draw()
{
	Engine.update(engine);

	background("lightgrey");

	roof3.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	if(keyDown("left"))
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100, y:-100});
	}
	if(keyDown("right"))
	{
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:100, y:-100});
	}

	drawSprites();
}