# FtoC

First, I created the FtoC.js file in order to complete the assignment. Then, I used the code from our codealong.js file on the [class repository](https://github.com/rdwrome/261sp26/blob/main/03Operators%26Bindings/codealong.js) as a reference to get the ball rolling.

My first pass of code looked like this:

```javascript
const f = 99;
let c = (f-32)5/9;
console.log(c);
```

When I tried to run the code for the first time in EloquentJavascript, I got a syntax error for an unexpected number. I realized that the equation I inputted needed to be slightly different than the one seen in the [FtoC file](https://github.com/rdwrome/261sp26/blob/main/03Operators%26Bindings/FtoC.md). While that code reads Celsius = (Fahrenheit - 32)  5 / 9, mine would have to read

```javascript
let c = (f-32)*5/9;
```

After plugging the new equation into my code, I was left with

```javascript
const f = 99;
let c = (f-32)*5/9;
console.log(c);
```

I ran the code to check my work and was given the answer of 37.2 (repeating). I double checked my work with Google's farenheit to celcius converter and got the same answer. 