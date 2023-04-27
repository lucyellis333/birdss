// - change sky (collaged sky)

let bird = [];
numBirdy = 17;

let bird2 = [];
numBirdy2 = 26;

let bird3 = [];
numBirdy3 = 26;

let bird4 = [];
numBirdy4 = 27;

let bird5 = [];
numBirdy5 = 26;

var whichFrame = 0;
var whichFrame2 = 0;
var whichFrame3 = 0;
var whichFrame4 = 0;
var whichFrame5 = 0;

var delay = 80; //DELAY BETWEEN EACH FRAME

var nextTimer = 0;
var nextTimer2 = 0;
var nextTimer3 = 0;
var nextTimer4 = 0;
var nextTimer5 = 0;

let x, y;

let p;
let q;
let r;
let s;
let t;
let u;
let v;
let w;
let a;

//------------------------------------------

function preload(){
for (let i = 0; i < numBirdy; i++){
  bird[i] = loadImage("bird"+i+".png");}

for (let i = 0; i < numBirdy2; i++){
    bird2[i] = loadImage("bird2"+i+".png");
  }

for (let i = 0; i < numBirdy3; i++){
    bird3[i] = loadImage("bird3"+i+".png");
  }

for (let i = 0; i < numBirdy4; i++){
    bird4[i] = loadImage("bird4"+i+".png");
  }

for (let i = 0; i < numBirdy5; i++){
    bird5[i] = loadImage("bird5"+i+".png");
  }

// cloud1 = loadImage("cloud0.png");
// cloud2 = loadImage("cloud2.png");
// cloud3 = loadImage("cloud3.png");

cloud4 = loadImage("clous.png");

sky = loadImage("skyyy.jpeg");

mouse = loadImage("mouse.png");

plane1 = loadImage("plane2.gif");

hills = loadImage("hills.png");

balloon = loadImage("balloon.gif");

}

//------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  nextTimer = millis() + delay;
  nextTimer2 = millis() + delay;
  nextTimer3 = millis() + delay;
  nextTimer4 = millis() + delay;
  nextTimer5 = millis() + delay;
  background(255);
  p = height;
  q = height;
  r = height;
  s = height;
  t = height;
  u = height;
  v = height;
  w = height;
  a = height;
  // z = width;
  
}

//------------------------------------------

function draw() {
    
  background(182, 216, 246);

  image(cloud4, w, 350, 250, 100);
  image(cloud4, t, 200, 500, 200);
  image(cloud4, u, 500, 500, 200);
  
  image(plane1, w, 400, 150, 100);

  image(balloon, a, 150, 75, 100);

  image(bird2[whichFrame2], p, 150, 250, 200);
  image(bird3[whichFrame3], q, 600, 250, 200);
  image(bird4[whichFrame4], r, 400, 250, 200);
  image(bird5[whichFrame5], v, 250, 250, 200);

  image(mouse, mouseX, mouseY, 30, 40);

  //------------------------------------------

  if (millis()>nextTimer){ 
      whichFrame = whichFrame + 1;
      if(whichFrame >= bird.length){
        whichFrame = 0;
      }
      nextTimer = millis() + delay;
  }

  if (millis()>nextTimer2){ 
    whichFrame2 = whichFrame2 + 1;
    if(whichFrame2 >= bird2.length){
      whichFrame2 = 0;
    }
    nextTimer2 = millis() + delay;
}

if (millis()>nextTimer3){ 
  whichFrame3 = whichFrame3 + 1;
  if(whichFrame3 >= bird3.length){
    whichFrame3 = 0;
  }
  nextTimer3 = millis() + delay;
}

if (millis()>nextTimer4){ 
  whichFrame4 = whichFrame4 + 1;
  if(whichFrame4 >= bird4.length){
    whichFrame4 = 0;
  }
  nextTimer4 = millis() + delay;
}

if (millis()>nextTimer5){ 
  whichFrame5 = whichFrame5 + 1;
  if(whichFrame5 >= bird5.length){
    whichFrame5 = 0;
  }
  nextTimer5 = millis() + delay;
}

//------------------------------------------

  fr = 10;
  frameRate(fr);

  p = p -7;
  q = q -9;
  r = r -15;
  s = s -12;
  t = t - 3;
  u = u - 5;
  v = v -10;
  w = w-8;
  a = a-2;

//------------------------------------------

  if (p<0){
    p = width;
  }

  if (q<0){
    q = width;
  }

  if (r<0){
    r = width;
  }

  if (s<0){
    s = width;
  }

  if (t<0){
    t = width;
  }

  if (u<0){
    u = width;
  }

  if (v<0){
    v = width;
  }

  if(w<0){
    w = width;
  }

  if(a<0){
    a = width;
  }

  //------------------------------------------

  }