const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block,ball,stand1,stand2
var holder ,slingShot
var polygonImg
var engine,world
score=0;

function preload(){
    polygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas=createCanvas(900,400)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
strokeWeight(2)
stroke(15)
fill ("blue")

    block= new Box(330,235,30,40)
    block2= new Box(360,235,30,40)
    block3= new Box(390,235,30,40)
    block4= new Box(420,235,30,40)
    block5= new Box(450,235,30,40)
fill("green")
    block6= new Box(360,195,30,40)
    block7= new Box(390,195,30,40)
    block8= new Box(420,195,30,40)

fill("cyan")
    block9= new Box(390,155,30,40)
   fill("red")
    block10= new Box(330,235,30,40)
    block11= new Box(360,235,30,40)
    block12= new Box(390,235,30,40)
    block13= new Box(420,235,30,40)
    block14= new Box(450,235,30,40)
fill("yellow")
    block15= new Box(360,195,30,40)
    block16= new Box(390,195,30,40)
    block17= new Box(420,195,30,40)

fill("orange")
    block18 = new Box(390,155,30,40)

ground =new Ground()
stand1=new Stand(390,300,250,10)
stand2=new Stand(700,200,200,10)
ball =Bodies.circle(50,200,20)
World.add(world,ball)
slingshot=new SlingShot(this.ball,{x:100,y:200})




}
function draw(){
    background(0)
    Engine.update(engine)

    textSize(20);
    fill("lightyellow")
    text("drag the hexagonal stone and release it, to launch it towards the blocks",100,30)

    block.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()

    ground.display()
    stand2.display()
    stand1.display()
    //ball.display()
    slingshot.display()
    imageMode(CENTER)
    image(polygonImg,ball.position.x,ball.position.y,40,40)
    block.score()
    block2.score()
    block3.score()
    block4.score()
    block5.score()
    block6.score()
    block7.score()
    block8.score()
    block9.score()
    block10.score()
    block11.score()
    block12.score()
    block13.score()
    block14.score()
    block15.score()
    block16.score()
    block17.score()
    block18.score()
}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.polygon);
    }
}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime=responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06&&hour<=18){
        bg="images/light.jpg";
    }else{
        bg="images/dark.jpg";
    }
backgroundImg=loadImage(bg);
console.log(backgroundImg)
}