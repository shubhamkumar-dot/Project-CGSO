var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if(car.isTouching(wall)){
    deformation = (0.5*weight*speed*speed)/22500;
    car.velocityX = 0;
    car.x = 50;
    car.y = 200;
  }

  if(deformation < 100){
    car.shapeColor = "green";
  }

  if(deformation < 100 && deformation === 180){
    car.shapeColor = "yellow";
  }

  if(deformation < 180){
    car.shapeColor = "red";
  }

  drawSprites();
}