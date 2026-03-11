function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  fill(255, 204, 51);
  circle(200, 200, 370); // Draw head
  fill(119, 64, 25);
  ellipse(126,200,37,49);
  ellipse(274,200,37,49);
  arc(200,262,197,136,0,PI); // Draw eyes/mouth
  fill(235,69,138);
  ellipse(200,336,86,123); // Draw tongue
}