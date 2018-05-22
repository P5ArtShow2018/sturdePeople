var gif;

function setup() {
  createCanvas(windowWidth,windowHeight);
  gif = loadGif('sturdeman.gif');
  gif2 = loadGif('female2.gif');
}
function preload (){
  
}

function draw() {
  background(255);
  image(gif, mouseX, mouseY);
  image(gif2,50,30 );
  
}

