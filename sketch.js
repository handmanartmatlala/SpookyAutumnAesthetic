let grass; 
let bug;
let snail;
let grasshopper;
let buzz;
let circleX = 100; 
let house;
let decoration; 

function preload(){
  song = loadSound('stranger-than-fiction-8383.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grass = loadImage("grass-6110426_960_720.png"); 
  bug = loadImage("bug.gif");
  snail = loadImage("snail.gif");
  grasshopper = loadImage("buggy.gif"); 
  buzz = loadImage("buzz whoa.gif"); 
  house = loadImage("giphy (5).gif");
  decoration = loadImage("giphy (16).gif"); 
  song.loop();
  
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

function draw() {
  background(232, 140, 49);
  noStroke()
  
  //house1
  image(house,600,-150,650,650)
  //grass
  image(grass, 0,-650,windowWidth+800, windowHeight+800)
  
  //ground
  
  fill(117, 95, 34)
  rect(0,500,windowWidth+800, windowHeight+200)
  
  //house2
  image(house,-100,-350,950,950)
  
  //decorations
   for (var x = 0; x < width; x = x + random(500, 500)) {
    image(decoration, -50 + x, 0, 500, 500);
  }
  
 //ant
  image(bug,200,400,250, 250)
  
  //grasshopper
  
  image(grasshopper, 800, 0, 700,700);
  
  //buzz
  image(buzz,mouseX, mouseY)
  
  //grassfront
  image(grass, 0,-300,windowWidth+800, windowHeight+800)
  
 
}
