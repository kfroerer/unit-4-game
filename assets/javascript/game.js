
var wins = 0;
var losses = 0;
var userScore = 0;
var targetMin = 19
var targetMax = 120;

var targetNum = myFunction(targetMin, targetMax);

function myFunction(targetMin, targetMax){
    return Math.floor(Math.random() * (targetMax-targetMin +1) + targetMin);
};
console.log(targetNum)



