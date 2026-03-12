let cols = prompt('Enter desired grid size.'), rows = cols
let objectSize  = 400/cols
function setup() {
  createCanvas(400, 400);
  noStroke();
}
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(objectSize/400);
  fill(255, 204, 51);
  circle(200, 200, 370); // Draw head
  fill(119, 64, 25);
  ellipse(126,200,38,50);
  ellipse(274,200,38,50);
  arc(200,260,195,138,0,PI); // Draw eyes/mouth
  fill(235,69,138);
  ellipse(200,336,86,123); // Draw tongue
  pop();
  }
function draw() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      drawObject(x*(width/rows), y*(height/columns), objectSize);
    }
  }
}