function setup() {
  createCanvas(400, 800);
  







}

var plinko = [];
var particle = [];
var divisions = [];

var divisionHight = 300;



function draw() {
  background(0, 0, 0);
  drawSprites();

  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new devisions( k, hight - divisionHight/2 ,10, devisionHight));
  }
  
  for (var j = 40; j<= width; j=j+50 )
  {
    plinkos.push (new plinko (j,75));
  }
  for (var j = 40; j<= width; j=j+50 )
  {
    plinkos.push = (new plinko (j,75));
  }
  
}