
let slider= 1

let bg;

var textTyped = 'Secret Message';

var font;



function setup() {
bg= loadImage('empty_cup copy.png');
  createCanvas(1000, 1000);
  noLoop();

  opentype.load('FreeSans.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

function draw() {
  if (!font) return;
  background(bg);
  // TODO draw cup
  //background(220);
  //fill(255,255,255);
  //stroke(0,0,0)
 
  
  // margin border
  translate(350, 500); // TODO: translate(x,y) to adjust position
  scale(0.20); // TODO: change scale multiplier to adjust size

  if (textTyped.length > 0) {
    // get a path from OpenType.js
    var fontPath = font.getPath(textTyped, 0, 0, 200);
    // convert it to a g.Path object
    var path = new g.Path(fontPath.commands);
    // resample it with equidistant points
    path = g.resampleByLength(path, 11);
    // path = g.resampleByAmount(path, 500);

    randomSeed(2)
    // dots
    fill(0);
    noStroke();
    var diameter = 7; // TODO: adjust diameter of dots
    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];
      // on every 2nd point
      addRandX = random(-100, 100);
      addRandY = random(-100, 100);
      circle(pnt.x+addRandX*slider, pnt.y+addRandY*slider, diameter);
      // TODO: Maybe draw different shape from circle
      
    }
  }
  
  if (slider >= 0){
    slider= slider-0.01
  }
 
}
