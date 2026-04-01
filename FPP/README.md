# Final Project Proposal
### One Sentence Overview
My final project will be an interactive Amen Break sampler, accompanied with reactive visuals.
###Resources
[Working with sound in P5](https://p5js.org/reference/p5.sound/)

[Exploring creative coding in P5](https://perthirtysix.com/explore-creative-coding-with-30-p5js-sketches)

[Perlin Noise Tutorial](https://genekogan.com/code/p5js-perlin-noise/)

###One Paragraph Overview
This project does not overlap with any work I am doing outside of this class.

At the very least, I’d be making an interactive drum sampler within p5. The sliced drum break would be an Amen Break divided into 8 slices, with each slice assigned to a key on the keyboard. When a user presses a key, the slice is triggered, which makes the keyboard act like a sampler. This turns p5 into a live sampler! However, it doesn’t stop there. I want there to be a visual aspect of the sampler. The visual aspect will have (at least) 2 parts. The first is a background that is procedurally generated, changing on its own over the course of the project. The second part is a reactive element, where each key and sample slice triggers a different visual to display. Each slice will have a different color range per slice.

I think that I can make the sampler a bit more in-depth by adding some modularity to the sampler. The ideas I have in mind are being able to adjust the length of the sample through time-stretching, adjusting total sample volume by moving the mouse across the y-axis, and adding a waveform of the sample. In order to flesh out the visual element, I could add unique shapes for each slice, and make the sample visuals overlap with each other so that they slowly fade away.

Hopefully, I can add a randomized component to the sampler. It would add some variation if certain samples reversed every 1 in 100 times it was triggered. I would also like to try and add some sort of external effect that can be switched on and off, like reverb or a filter of some sort. In terms of adding something for my visual element, I’d like to add more reactivity to playing samples in rapid succession. Spamming the same key could cause larger or more intense reactions, as well as quicker movements. This adds a rhythmic element to the visuals which will add so much depth to the entire project.

###Outline
#### April 9
 - Sampler completely finshed
 - All 8 slices mapped to unique keys
#### April 16
 - Procedurally generated background finished
 - Visuals reacting to keyboard hits
 - Colors (or color ranges) assigned to each slice
#### April 23
 - Volume control with mouse on y-axis
 - BPM able to change, pitch of sample stretched accordingly
 - Unique shapes per slice
 - Reactive visuals overlap with each other
#### April 30
 - Reverb on/off
 - Intensity of visuals correlate with key spamming
 - Random slice reversal
#### May 7
 - Done!