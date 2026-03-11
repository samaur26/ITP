function setup() {
  createCanvas(400, 400);
  noStroke();
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(0.6);
  fill(255, 204, 51);
  circle(150, 150, 150); // Draw head
  fill(119, 64, 25);
  ellipse(120,150,15,20);
  ellipse(180,150,15,20); 
  arc(150, 175, 80, 55, 0, PI); // Draw eyes and mouth
  fill(235,69,138);
  ellipse(150,205,35,50); // Draw tongue
  pop();
}

function draw() {
  drawObject(0, 0, 0);
  drawObject(0, 120, 0);
  drawObject(0, 240, 0);
}