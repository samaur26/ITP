# FizzBuzz

After reading the description of the assignment, I knew that I had to make a program that counted every integer from 1-100, replacing the numbers that were divisible by 3, 5, or both with the words Fizz, Buzz, and FizzBuzz respectively. I used some code from the loops section of our [Lesson 4 Code Along](https://github.com/rdwrome/261sp26/blob/main/04ControlFlow/codealong.js) to get started.

```javascript
for (let i = 1; i <= 100; i++){
  if (i % 5 === 0 && i % 3 === 0)
    console.log("FizzBuzz");
}
```	

After this, I expanded on the code by adding two more else/if statements: one for numbers that "Fizz", and another for numbers that "Buzz."

```javascript
for (let i = 1; i <= 100; i++){
  if (i % 5 === 0 && i % 3 === 0)
    console.log("FizzBuzz");
  else if (i % 5 === 0){
    console.log("Buzz")
  }else if (i % 3 === 0){
    console.log ("Fizz")
  }
    console.log(i);
}
```

While I thought that this would do the trick, it printed my integers *alongside* the words Fizz, so the numbers looked like:

1, 2, 3, Fizz, 4, 5, Buzz...

I realized that this could be fixed if I simply moved the final console.log(i) into an else statement, so that the code had something else to go to if the integer wasn't divisible by either number. This left me with:

```javascript
for (let i = 1; i <= 100; i++){
  if (i % 5 === 0 && i % 3 === 0)
    console.log("FizzBuzz");
  else if (i % 5 === 0){
    console.log("Buzz");
  }
  else if (i % 3 === 0){
    console.log ("Fizz");
  }
  else (console.log(i));
}
```

This solved the problem of the integer and the Fizz/Buzz/FizzBuzz being visible at the same time, and left me with a working piece of code!