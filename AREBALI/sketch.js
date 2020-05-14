const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot, bird;
var Pig1, Pig2, Pig3, Pig4, Pig5, Pig6;
function setup(){
      var canvas = createCanvas(1200,400);
      engine = Engine.create();
      world = engine.world;
  
  
      ground = new Ground(600,height,1200,20);
      platform = new Ground(150, 305, 300, 170);
  
      pig1 = new Pig(700,320,70,70);
      pig2 = new Pig(920,320,70,70);
      pig3 = new Pig(810, 350);
      log1 = new Log(810,260,300, PI/2);
  
      pig4 = new Pig(700,240,70,70);
      pig5 = new Pig(920,240,70,70);
      pig6 = new Pig(810, 220);
  
      log3 =  new Log(810,180,300, PI/2);
  
      pig7 = new Pig(810,160,70,70);
      log4 = new Log(760,120,150, PI/7);
      log5 = new Log(870,120,150, -PI/7);
  
      bird = new Bird(200,50);
  
      //log6 = new Log(230,180,80, PI/2);
      slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
      background(0);
      Engine.update(engine);
      //strokeWeight(4);
      pig1.display();
      pig2.display();
      ground.display();
      pig.display();
      log1.display();
  
      pig3.display();
      pig4.display();
      pig3.display();
      log3.display();
  
      pig5.display();
      log4.display();
      log5.display();
  
      bird.display();
      platform.display();
      //log6.display();
      slingshot.display();    
  }
  
  function mouseDragged(){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
      slingshot.fly();
  }
  
  function keyPressed(){
      if(keyCode === 32){
          slingshot.attach(bird.body);
      }
  }