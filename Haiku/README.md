# Haiku
First, I looked up [funny haikus on YourDictionary.com](https://www.yourdictionary.com/articles/funny-haiku-examples). I found the one I wanted to use (the "Birthday Haiku"), then I opened the Terminal in order to start the poem. First, I used the command 
```cli
pwd
``` 
in order to show the directory I was currently in. I got this code, as well as all the other code used in this project, from [our class repository](https://github.com/rdwrome/261sp26/blob/main/01Git%26Shell/README.md#command-line). Then, I used
```cli
cd /Users/sra26/Documents/GitHub/ITP/Haiku
```
to switch the working directory to the Haiku subfolder of my ITP repository. After this, I used this code from [our class repository](https://github.com/rdwrome/261sp26/blob/main/01Git%26Shell/README.md#code-along-1) and modified the text to say my haiku instead of "Hello, world:"
```cli
say -v "Samantha" "For your birthday, friend, I wrote this haiku for you. Worst present ever." -o haiku.aiff
```
The Haiku file was then created! I located it in the Haiku subfolder via Finder and played the .aiff file to ensure my code worked. I was able to get it on the first try and didn't have to do any debugging (thankfully!). The file played perfectly, said my Haiku accurately, and was saved to the right location.