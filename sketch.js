let shapeColor;
var w;
var h;
var eb;
var n;
var b;
var x;
var seconds;
let timer = 0;
let fr = 12


function setup() {
  createCanvas(800, 800);
  shapeColor = color(232, 174, 180);
  
  w = 20
  h = 30
  eb = 370
  n = random(0, 100);
  b = random (0, 10);
  seconds = (500,5000);
  // x = map(millis(), startAt, startAt + 5000, 0, width);
  // startAt = millis();
  frameRate(fr);
  
}

function draw() {
  // red , green , blue
  // can change to HSB 
  background(255);
  fill(shapeColor);
  noStroke();

    if (n > 50){
     ellipse(400, 400, 450, 450);
  }
else rect(200, 200, 400, 400);

  
 noStroke();
  //hair
  fill(79, 58, 33);
  rect(280,320, 240, 300);
  ellipse(400,320,240,150)
  ellipse(310, 620, 60, 60);
  ellipse(360, 600, 70, 60);
  ellipse(490, 620, 60, 60);
  ellipse(420, 620, 80, 50);

  
  //face
  fill(250, 217, 177); 
  noStroke();
  ellipse(400,400, 200,225);
  line(398, 290, 400, 270);
  line(402, 290, 400, 270);
 //ears
  ellipse(300,410, 50, 60);
  ellipse(500,410, 50,60);
  //neck
  rect(380,500, 40, 40);
  ellipse(400, 540, 40);
  
  //earrings
  stroke(232, 187, 90);
  strokeWeight(5);
  line(300, 433, 300, 480);
  line(500, 433, 500, 480);

  
  //eyes
  fill(0);
  noStroke();
  ellipse(350, 400, w, h);
  ellipse(450, 400, w, h);
  
  //eyebrows & nose
  noFill();
  stroke(0);
  line(330, 375, 365, eb);
  line(470, 375, 435, eb);
  line(392,442, 404, 447);
    
  
  // current blink function
  if (mouseIsPressed == false){
   if (millis() >= seconds+timer) {
     blink();
        timer = millis();     
  } else noBlink();

  }
   console.log (mouseX + "," + mouseY);
  
  
} 



function mousePressed(){
  
 shapeColor = color(random(255), random(255), random(255) );

  h = h-25;
  w = w+10;
  eb = eb+10;

  
}

function mouseReleased(){
  
  h = 30;
  w = 20;
  eb = eb-10;
}

function blink (){
 
    h = h-25;
    w = w+10;

}

function noBlink(){
  //why is mousePressed always on problem rn is that it keeps resetting during mousepress just need to not reset when mousepress
//   if (mousePressed){
    
//   }
//   else
  if (mouseIsPressed == false){
  h = 30
  w = 20
  }
}
