let Slice1, Slice2, Slice3, Slice4, Slice5, Slice6, Slice7, Slice8;
let visuals = [];
let buffer;
let filter;

function preload() {
  Slice1 = loadSound('Slice1.wav');
  Slice2 = loadSound('Slice2.wav');
  Slice3 = loadSound('Slice3.wav');
  Slice4 = loadSound('Slice4.wav');
  Slice5 = loadSound('Slice5.wav');
  Slice6 = loadSound('Slice6.wav');
  Slice7 = loadSound('Slice7.wav');
  Slice8 = loadSound('Slice8.wav');
}

function setup(){
  let cnv = createCanvas(800, 800);
  filter = new p5.LowPass();
  noStroke();
  buffer = createGraphics(800,800);
   for (let x = 0; x < width; x+=2)
       for (let y = 0; y < height; y+=2) {
         n = noise(0.01*x, 0.01*y);     
         r = map(n, 0, 1, 60, 104);
         g = map(n, 0, 1, 100, 220);
         b = map(n, 0, 1, 170, 190);  
        buffer.fill(r, g, b);
        buffer.rect(x,y,2,2); 
        buffer.noStroke();
      }
Slice1.disconnect();
Slice1.connect(filter);
Slice2.disconnect();
Slice2.connect(filter);
Slice3.disconnect();
Slice3.connect(filter);
Slice4.disconnect();
Slice4.connect(filter);
Slice5.disconnect();
Slice5.connect(filter);
Slice6.disconnect();
Slice6.connect(filter);
Slice7.disconnect();
Slice7.connect(filter);
Slice8.disconnect();
Slice8.connect(filter);
}


function keyPressed(){
let vol = map(mouseY, 800, 0,0,1);
 if (key === 'q') {
   Slice1.setVolume(vol);
    Slice1.play();
    visuals.push({
      shape: ellipse,
      x: random(width),
      y: random(height),
      size: random(100,200),
      growth: random(2, 5), 
      r: random(220, 255),
      g: random(50, 90),
      b: random(50, 90),
      alpha: 255,
    });
  }
  if (key === 'w'){
    Slice2.setVolume(vol);
    Slice2.play();
     visuals.push({
      shape: ellipse,
      x: random(width),
      y: random(height),
      size: random(100,200),
      growth: random(2, 5), 
      r: random(255, 255),
      g: random(158, 210),
      b: random(80, 120),
      alpha: 255,
    });
  }
  if (key === 'e'){
    Slice3.setVolume(vol);
    Slice3.play();
    visuals.push({
      shape: rect,
      x: random(width),
      y: random(height),
      size: random(100,200),
      growth: random(2, 5), 
      r: random(250, 255),
      g: random(250, 255),
      b: random(250, 255),
      alpha: 255,
    });
  }
   if (key === 'r') {
    Slice4.setVolume(vol);
    Slice4.play();
     visuals.push({
      shape: rect,
      x: random(width),
      y: random(height),
      size: random(100,200),
      growth: random(2, 5), 
      r: random(120, 165),
      g: random(130, 165),
      b: random(130, 165),
      alpha: 255,
    });
  }
  if (key === 'a'){
    Slice5.setVolume(vol);
    Slice5.play();
    visuals.push({
      shape: ellipse,
      x: random (width),
      y: random (height),
      size: random (100,200),
      growth: random (2,5),
      r: random(160, 190),
      g: random(120, 155),
      b: random(160, 200),
      alpha: 255,
    })
  }
   if (key === 's') {
     Slice6.setVolume(vol);
    Slice6.play();
    visuals.push({
      shape: ellipse,
      x: random (width),
      y: random (height),
      size: random (100,200),
      growth: random (2,5),
      r: random(160, 190),
      g: random(120, 155),
      b: random(160, 200),
      alpha: 255,
    })
  }
  if (key === 'd'){
    Slice7.setVolume(vol);
    Slice7.play();
    visuals.push({
      shape: ellipse,
      x: random (width),
      y: random (height),
      size: random (100,200),
      growth: random (2,5),
      r: random(200, 240),
      g: random(200, 250),
      b: random(255, 255),
      alpha: 255,
      })
  }
   if (key === 'f'){
    Slice8.setVolume(vol);
    Slice8.play();
     visuals.push({
      shape: rect,
      x: random (width),
      y: random (height),
      size: random (100,200),
      growth: random (2,5),
      r: random(255, 255),
      g: random(100, 190),
      b: random(200, 212),
      alpha: 255,
      })
  }
}
  
function draw() {
  let cut = map(mouseX, 0, 800, 20, 20000);
  filter.freq(cut);
  image (buffer, 0, 0);
  for (let vis of visuals){
    fill(vis.r, vis.g, vis.b, vis.alpha);
    noStroke();
    vis.shape(vis.x, vis.y, vis.size);
    vis.size = (vis.size + vis.growth);
    vis.alpha = (vis.alpha-(vis.growth));
  }
}
  