let pumpkin; 
var faces = [];  
var index = 0
let knife;
let wood; 
let tree; 
let s = '"Click to carve the pumpkin"';


function setup() {
  createCanvas(windowWidth, windowHeight);
  pumpkin = loadImage("pump.png"); 
  wood = loadImage("wood-2045379_960_720.jpg");
  tree = loadImage("tree-2773505_960_720.png");
 // faces = loadImage("face1.png","happy face.gif", "face2.png","suspscious.gif", "face3.png"); 
  faces[0] = loadImage("face1.png");
  faces[1] = loadImage("face2.png");
  faces[2] = loadImage("face3.png");
  faces[3] = loadImage("happy face.gif"); 
  faces[4] = loadImage("suspscious.gif"); 
  idx = 0;
  knife = loadImage("knife.png"); 
 
}

function draw() {
  background(224, 196, 146);
  
  //pumpkin face
  image(tree,650,-1000,windowWidth+1000, windowHeight+1000)

  image(wood,0, 800,windowWidth+800,windowHeight+800);
  image(pumpkin,0,0); 
  
  image(faces[idx],1350,950, -800 , -800 );
  
  textSize(70);
  fill(0);
  textFont('Georgia');
  text(s, 50, 50, 400, 700); 

//  image(faces[index], 20, 200);
  
  image(knife, mouseX, mouseY);
  

}
  
function mouseClicked() {
  idx++;
  if (idx > faces.length - 1) {
    idx = 0;
  }
}
 // function mousePressed() {
   // index = Math.floor(random(0, faces.length));
//}