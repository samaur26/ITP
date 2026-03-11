let cols; let rows;
let size  = 400/prompt('Enter rows and columns amount:');

function setup() {
  createCanvas(400, 400);
  noStroke();
  cols = width/size;
  rows = height/size
}


function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(size/400);
  fill(255, 204, 51);
  circle(200, 200, 370); // Draw head
  fill(119, 64, 25);
  ellipse(126,200,37,49);
  ellipse(274,200,37,49);
  arc(200,262,197,136,0,PI); // Draw eyes/mouth
  fill(235,69,138);
  ellipse(200,336,86,123); // Draw tongue
  pop();
  }
  
function draw() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      drawObject(x*size, y*size, size);
    }
  }
}
