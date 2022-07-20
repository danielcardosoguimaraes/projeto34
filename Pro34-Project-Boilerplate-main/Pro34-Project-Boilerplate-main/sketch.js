
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score = 0
var ground,ground2
var destroyer
var destroyerRocks = []
var Parts,buildingParts_img

function preload(){

  background_img = loadImage('bk.jpg')
  buildingParts_img = loadImage('building.png')
  destroyerRocks = loadImage('rock.png')
}

function setup() {
  createCanvas(700,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(350,400,300,20);
  ground2 = new Ground(350,500,1000,20);
  
  part1 = new buildingParts(350,390,50,225)
  part2 = new buildingParts(300,390,50,125)
  part3 = new buildingParts(400,390,50,125)
  part4 = new buildingParts(312,240,25,50)
  part5 = new buildingParts(387,240,25,50)
  part6 = new buildingParts(350,140,35,50)
  part7 = new buildingParts(350,90,25,70)

  destroyer = new Destroyer(
    150,
    380,
    120,
    120
  )
}


function draw() 
{
  background(background_img);
  Engine.update(engine);

  for (var i; i < destroyerRocks.length; i++) {
    if (destroyerRocks[i] !== undefined) {
      destroyerRocks[i].display();
    }
  }
  
 

  ground.show()
  ground2.show()

  part1.display()
  part2.display()
  part3.display()
  part4.display()
  part5.display()
  part6.display()
  part7.display()

  destroyer.display();
  
}

function keyPressed() {
  if (keyCode === 32) {
    var posX = destroyer.body.position.x;
    var posY = destroyer.body.position.y;
    var angle = destroyer.body.angle;
    var rock = new DestroyerRock(posX, posY, 100, 10, angle);

    Matter.Body.setAngle(rock.body, angle);
    destroyerRocks.push(rock);
  }
}

function keyReleased() {
  if (keyCode === 32) {
    if (destroyerRocks.length) {
      var angle = destroyer.body.angle;
      destroyerRocks[destroyerRocks.length - 1].shoot(angle);
    }
  }
}