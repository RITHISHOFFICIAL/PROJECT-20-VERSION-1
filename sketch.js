var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car =createSprite(40,200,30,10);
  wall=createSprite(1200,200,20,height/2);

  car.velocityX=speed;
}

function draw() {
  background(0);  
  
 

  if (wall.x-car.x<wall.width/2+car.width/2){
    deformation=0.5*weight*speed*speed/22500;
  
      if (deformation>180){
          car.shapeColor="red";
          car.velocityX=0;
        } 

      if (deformation<=180 && deformation>=80){
            car.shapeColor="yellow";
            car.velocityX=0;
        }

    
      if (deformation<100){
            car.shapeColor="green";
            car.velocityX=0;
          }
      }

  drawSprites();

}