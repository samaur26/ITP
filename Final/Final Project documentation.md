# Final Project
## Part 1: the Sampler
First, I split my sample into 8 audio files. of equal length. I made it so that each slice was an 8th note long, much like you would find in a normal sampler. I simply uploaded each file to p5 individually. In order to start them, I declared each slice as a variable so they could store each sound file. 

```javascript
let Slice1, Slice2, Slice3, Slice4, Slice5, Slice6, Slice7, Slice8
```

In order to get the samples to play, I used the preload function, which I realized would be needed if I wanted to have the sounds load into the sketch. Then, I set up my canvas, making it a simple 800x800 frame. Finally, I simply used the function keyPressed from the [P5 reference page](https://p5js.org/reference/p5/keyPressed/) to map each key to an individual slice. The whole code so far looks like this:

```javascript
let Slice1, Slice2, Slice3, Slice4, Slice5, Slice6, Slice7, Slice8
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
function setup() {
  let cnv = createCanvas(800, 800);
  noStroke();
}
function keyPressed(){
  if (key === 'q') {
    Slice1.play();
  }
  if (key === 'w'){
    Slice2.play();
  }
  if (key === 'e'){
    Slice3.play();
  }
   if (key === 'r') {
    Slice4.play();
  }
  if (key === 'a'){
    Slice5.play();
  }
   if (key === 's') {
    Slice6.play();
  }
  if (key === 'd'){
    Slice7.play();
  }
   if (key === 'f'){
    Slice8.play();
  }
}```

## Part 2: Perlin Noise Background
This part was also (relatively) simple. But not easy! I wanted the background to look like clouds, and knew the way to do that was with perlin noise. In order to get a starting point, I simply copied the start of the [2D perlin noise section](https://genekogan.com/code/p5js-perlin-noise/) of Gene Kogan's tutorial in order to get a starting point:

```javascript
for (var x = 0; x < width; x+=10) {
		for (var y = 0; y < height; y+=10) {
			var c = 255 * noise(0.01 * x, 0.01 * y);
			fill(c);
			rect(x, y, 10, 10);
```

When I copied this into the draw object, it looked a bit too blocky for my taste, so I adjusted the nested for loop so that it would run over the space of 2 pixels rather than 10. 

```javascript
function setup() {
  let cnv = createCanvas(800, 800);
  noStroke();
  for (var x = 0; x < width; x+=2) {
  		for (var y = 0; y < height; y+=2) {
  			var c = 255 * noise(0.01 * x, 0.01 * y);
  			fill(c);
  			rect(x, y, 2, 2);
           }
         }
}
```

Since there's only one value going into the fill function, it returns grayscale colors. I wanted something a lot more colorful, so my next step was to try and add some color parameters to the field. First, I changed the code so that there were 3 separate noise operations for each color. Then, I changed the fill(c) to fill(r,g,b) so that the color range would go from grayscale to all colors:

```javascript
function setup() {
  for (let x = 0; x < width; x+=2) {
       for (let y = 0; y < height; y+=2) {
         r = 255 * noise(0.01*x, 0.01*y)
         g = 255 * noise(0.01*x, 0.01*y)
         b = 255 * noise(0.01*x, 0.01*y)
         fill(r,g,b);
         rect (x, y, 2, 2)
         }
       }
  }
```

While this fixed the grayscale problem, I now just had a gigantic wall of rainbow. Very cool, but not what I wanted. I was thinking about more of an organized color pallette. I tried a bunch of different changes at first, including changing up the scale of the noise for each equation from 0.01 to another number. That didn't work. Neither did changing the x and y offset of each variable. I realized that if I wanted to create a background that simply moved between a couple of colors I liked, I'd have to change the function so that I wasn't just using randomized RGB values. 

In order to make this happen, I decided to go back to doing 1 noise function. I also learned about the map function, which is capable of converting (remapping) 1 set of values to another. Since the noise function always outputs a floating point value between 0 to 1, I could remap that value into three separate variables - 1 for red, one for green, and one for blue. These variables would all contain map functions that convert that noise value to RGB. This results in a discernible color palette across the canvas!

```javascript
function setup() {
  let cnv = createCanvas(800, 800);
  noStroke();
  for (let x = 0; x < width; x+=2) {
       for (let y = 0; y < height; y+=2) {
         n = noise(0.01*x, 0.01*y);   
      let r = map(n, 0, 1, 200, 255);
      let g = map(n, 0, 1, 94, 127);
      let b = map(n, 0, 1, 83, 115);    
         fill(r, g, b);
         rect(x,y,2,2);
         }
       }
  }
```

Or so I thought. It basically just made my canvas a blob of red. I realized that my ranges were really off, with red having way more priority over green and blue. After a bit of finagling, I ended up with this as the final code for the perlin background:

```javascript
  function setup(){
    let cnv = createCanvas(800, 800);
    noStroke();
     for (let x = 0; x < width; x+=2) {
         for (let y = 0; y < height; y+=2) {
           n = noise(0.01*x, 0.01*y);     
           r = map(n, 0, 1, 60, 104);
           g = map(n, 0, 1, 100, 220);
           b = map(n, 0, 1, 170, 190);  
           fill(r, g, b);
           rect(x,y,2,2);
        }
     }
  }
```
## Part 3: The Visuals
The core of this whole project is to get shapes to appear whenever certain keys are pressed. I knew I wanted the visuals to start small, expand quickly, and then fade away as they were expanding. I also wanted these visuals to appear randomly across the canvas. While it'd look a bit chaotic, it would add the visual element of the sampler that I'm looking for. 

I decided to start simple, only using one slice for the visuals at first.

To start, I added an empty array called visuals at the top of my code. Then, I called that array within the "If the Q key is pressed" portion of the keyPressed function. Then, I added the various parameters within that array I'd need to define and modify. These parameters were the shape of the visual, where the visual would start, how big the initial visual would be, how much it grows in size, its color, as well as its transparency. Visuals is the name of the empty array, and calling visuals.push within the if statement adds this glob of data to the array.

```javascript
function keyPressed(){
 if (key === 'q') {
    Slice1.play();
    visuals.push({
      shape: ellipse,
      x: random(width),
      y: random(height),
      size: random(1,10),
      growth: random(2, 5), 
      r: random(200, 255),
      g: random(50, 100),
      b: random(50, 100),
      alpha: 255
    });
  }
```

First, I tried adding a for loop for the visuals array into the draw function, that printed the visual as the key was pressed:

```javascript
function draw() {
  for (let visuals){
    fill(visuals.r, visuals.g, visuals.b, visuals.alpha);
    noStroke();
    visuals.shape(visuals.x, visuals.y, visuals.size);
  }
}
```

However, this didn't work! It came down to how I was calling the array. By saying for (let visuals), I'm just calling the whole array within the loop again. I'm not telling the array what to look for. Since I'm adjusting variables within the visuals.push section, I'd have to call the variables within the array using a for... of... loop. [Mozilla helped me out on that one!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement) So, I changed the for loop to:

```javascript
function draw() {
  for (let vis of visuals){
    fill(vis.r, vis.g, vis.b, vis.alpha);
    noStroke();
    vis.shape(vis.x, vis.y, vis.size);
  }
}
```

Which worked perfectly. The next step was adding the burst/fadeaway effects, where the visuals grow in size while fading away. I knew that as the size and growth variables within visuals increased, I'd need to decrease the alpha in order to get the effect I wanted. Within the for loop, I added two lines. One added the growth value to the size value to create a new size, and the other subtracted the growth value from the alpha value to get a new transparency level.

The reason these visuals and fades even work is because the draw function loops every frame, which allows for the shape to be drawn with the new vis.size and vis.alpha values. This creates the animation, because a new shape is being drawn so quickly (at 60 FPS) that it looks like the shape is growing and fading away.

```javascript
function draw() {
 for (let vis of visuals){
    fill(vis.r, vis.g, vis.b, vis.alpha);
    noStroke();
    vis.shape(vis.x, vis.y, vis.size);
    vis.size = (vis.size + vis.growth);
    vis.alpha  = (vis.alpha-(vis.growth));
  }
}
```

While that got the appropriate growth effects and masking I wanted, the visuals didn't appear to be fading away. They just lingered on the screen. This got me thinking about ways to reset all of the visuals within the draw function so that they'd fade. I figured I could just reset the background within the draw function, like so:

```javascript
function draw() {
 background(0)
  for (let vis of visuals){
    fill(vis.r, vis.g, vis.b, vis.alpha);
    noStroke();
    vis.shape(vis.x, vis.y, vis.size);
    vis.size = (vis.size + vis.growth);
    vis.alpha  = (vis.alpha-(vis.growth));
  }
}
```

But that ended up taking away the perlin noise background as well. Not good! However, I was looking on the p5 reference page and saw the [createGraphics function](https://p5js.org/reference/p5/createGraphics/), which creates a buffer layer and a p5 Graphics object. I could put the perlin background within the createGraphics function, and then reset the background of the visuals within the draw function without the perlin background going away!
So, I changed a couple of things up. First, I created a variable at the top of the code, called buffer:

```javascript
let Slice1, Slice2, Slice3, Slice4, Slice5, Slice6, Slice7, Slice8
let visuals = [];
let buffer
```
Then, I added buffer to my setup function, using it to call createGraphics(800,800), so that the buffer layer covered my entire canvas. To round out my setup function, I simply changed the end of the perlin noise loop to draw on the buffer layer instead of the visual layer:

```javascript
function setup(){
  let cnv = createCanvas(800, 800);
  noStroke();
  buffer = createGraphics(800,800)
   for (let x = 0; x < width; x+=2) {
       for (let y = 0; y < height; y+=2) {
         n = noise(0.01*x, 0.01*y);     
         r = map(n, 0, 1, 60, 104);
         g = map(n, 0, 1, 100, 220);
         b = map(n, 0, 1, 170, 190);  
        buffer.fill(r, g, b);
        buffer.rect(x,y,2,2);
      }
   }
}
```

When I tried running this, it didn't work. I couldn't see the perlin background at all. I realized since I had created the graphics object and printed all of the perlin background information onto it, I had to call the graphics object within my draw function. This led to me using the image() function, which works with p5 graphics objects:

```javascript
function draw() {
  image (buffer, 0, 0);
  for (let vis of visuals){
    fill(vis.r, vis.g, vis.b, vis.alpha);
    noStroke();
    vis.shape(vis.x, vis.y, vis.size);
    vis.size = (vis.size + vis.growth);
    vis.alpha  = (vis.alpha-(vis.growth));
  }
}
```

Now, my visuals faded and my background was there... but it was covered in a black grid. Since I hadn't added noStroke(); to the setup function, the graphics object was covered in tiny rectangles that all had a thick outline. To fix this, I simply added a noStroke(); function that draws to the buffer layer.

```javascript
function setup(){
  let cnv = createCanvas(800, 800);
  noStroke();
  buffer = createGraphics(800,800)
   for (let x = 0; x < width; x+=2) {
       for (let y = 0; y < height; y+=2) {
         n = noise(0.01*x, 0.01*y);     
         r = map(n, 0, 1, 60, 104);
         g = map(n, 0, 1, 100, 220);
         b = map(n, 0, 1, 170, 190);  
        buffer.fill(r, g, b);
        buffer.rect(x,y,2,2);
        buffer.noStroke();
      }
   }
}
```

Finally, after so much time... that did the trick! My visuals were growing and fading the way I wanted them to. Now, the final touch was making unique visuals and color ranges for every slice. This part wasn't super hard, as I already had the code down for each key. I simply copied the structure of my first if statement within the keyPressed function and adjusted the individual RGB parameters from there until I got a color I liked. While the shapes are primitive, the core process and function of the sampler are still there. Visuals are reacting to what's playing! Yay!!

## Part 4: Modularity (is that a word? I don't know. It is now.)
After all that work, I finally had a working sampler with some reactive visuals. The final piece I wanted to add was something that the user could change. Namely, I decided it'd be fun to have the mouse control the volume of all of the slices when they're triggered based on its position on the y-axis. I got the idea for using the mouse to control elements of the sampler from [this article](https://perthirtysix.com/explore-creative-coding-with-30-p5js-sketches), which has a section about "Hovering over the Grid" using the mouse that I thought would be cool to implement.

I converted the mouse's position on the y-axis and the height of the canvas into numbers that could be read as volume. I did 0 and 1, assuming 1 is the full value and 0 is completely silent. Since this would only apply to the individual slices, I placed this statement at the top of my keyPressed(); function:

```javascript
function keyPressed(){
let vol = map(mouseY, 0, 800,0,1);
```
Then, following Step 4 of this [Sound in P5 Guide](https://medium.spatialpixel.com/sounds-bd05429aba38), I put a setVolume command before the play function in each of my slices:

```javascript
function keyPressed(){
let vol = map(mouseY, 0, 800,0,1);
 if (key === 'q') {
   Slice1.setVolume(vol);
    Slice1.play();
```

This did the trick, just not in the way I wanted it to. Instead of the highest volume being at the top of the canvas, it was at the bottom. To fix this, I simply switched the 

```let vol = map(mouseY, 0, 800,0,1)```

statement to:

```let vol = map(mouseY, 800, 0, 0,1)```

Which worked!

Finally, I figured it'd be fun to add some modulation with the mouse on the x-axis. I decided to make the sampler have a lowpass filter. Mouse all the way to the left, and the filter would be 100% on. Moving the mouse to the right would increase the LPF frequency. [P5 has a nifty little filter function](https://p5js.org/reference/p5.sound/p5.Filter/), and I adapted the first example to fit my code better. First, I created a let statement with the filter at the top of my code, before calling a lowpass filter within my setup function. Then, within the draw function, I created a let statement for the cutoff of the filter. I remapped the mouse's x-axis and width to a range between 20 and 20000, as those are the frequency values within the filter. Then, I set the filter's frequency to be the value of the cut function. 

A bit wordy, but here it is:

```javascript
let filter;
...
function setup(){
  let cnv = createCanvas(800, 800);
  filter = new p5.LowPass();
 ...
 function draw() {
   let cut = map(mouseX, 0, width, 20, 20000);
   filter.freq(cut);
```

But... this didn't work. Of course it didn't! I ended up skipping over a pretty pivotal part of that p5 filter example... the connect and disconnect statements. According to [this article](https://pdm.lsupathways.org/6_resources/7_soundandmusic/p5.sound/), P5 automatically routes your sound to the master output. The disconnect function... disconnects... the sound from the master, and the connect function connects those sounds to your filter. The p5 example has the disconnect/connect happening within the setup function, so I decided to try that:

```javascript
function setup(){
  let cnv = createCanvas(800, 800);
  filter = new p5.LowPass();
  noStroke();
  ...
  Slice1.disconnect();
  Slice1.connect(filter);
  }
 ```
 
 This worked! For slice 1. Since I have 8 individual audio files, I realized I'd have to dedicate 16 lines of code in my setup function exclusively to routing. This is definitely not the most efficient way of doing it, but I couldn't quite figure out how to make all of the slices into an array and call them so that they all disconnected/reconnected at once. 
 