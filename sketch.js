var canvasTop, canvasRight, canvasBottom, canvasLeft;
var pathWay;
var room1WallLeft,  room1WallTop, room1WallRight1, room1WallRight2 ;
var door1;
var spy, spyImage;

function preload()
{
  spyImage = loadImage("images/spy1.jpg");
}

function setup()
{
  createCanvas(1500,700);

  canvasTop = createSprite(750,5,1500,10);
  canvasTop.shapeColor = "red";

  canvasRight = createSprite(1495,350,10,700);
  canvasRight.shapeColor = "red";

  canvasBottom = createSprite(750,695,1500,10);
  canvasBottom.shapeColor = "red";

  canvasLeft = createSprite(5,350,10,700);
  canvasLeft.shapeColor = "red";

  spy = createSprite(50, 650, 30, 70);
  spy.addImage(spyImage);
  spy.scale = 0.02;

  pathWay = createSprite(80,600,140,5);
  pathWay.shapeColor = "green";

  room1WallLeft = createSprite(150,450,5,300);
  room1WallLeft.shapeColor = "green";

  room1WallTop = createSprite(300,300,300,5);
  room1WallTop.shapeColor = "green";
  
  room1WallRight1 = createSprite(450,360,5,120);
  room1WallRight1.shapeColor = "green";

  room1WallRight2 = createSprite(450,605,5,170);
  room1WallRight2.shapeColor = "green";
  
  door1 = createSprite(450,470,10,100);
  door1.shapeColor = "yellow";


}

function draw()
{
  background("white");
  text(mouseX + "," + mouseY, 1400,50);

  if(keyDown("up"))
  {
    spy.y = spy.y - 3;
  }

  if(keyDown("down"))
  {
    spy.y = spy.y + 3;
  }
  if(keyDown("left"))
  {
    spy.x = spy.x - 3;
  }

  if(keyDown("right"))
  {
    spy.x = spy.x + 3;
  }

  spy.bounceOff(canvasTop);
  spy.bounceOff(canvasRight);
  spy.bounceOff(canvasBottom);
  spy.bounceOff(canvasLeft);

  spy.bounceOff(pathWay);
  spy.bounceOff(room1WallLeft);
  spy.bounceOff(room1WallTop);
  spy.bounceOff(room1WallRight1);
  spy.bounceOff(room1WallRight2);

  if(spy.isTouching(door1))
  {
    door1.destroy();
  }

  drawSprites();

}