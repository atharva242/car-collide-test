var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1200,200,60,height/2);

}

function draw() {
  background("white");  


if(car.x-wall.x<(car.width+wall.width)/2){
  
  car.velocityx-0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){
    car.shapeColour=colour(255,0,0)
  }
  if(deformation<180 && deformation>100){

car.shapeColour=colour(230,230,0);
  }
  if(deformation<100){
car.shapeColour=colour(0,255,0);

  }

}


  drawSprites();
}