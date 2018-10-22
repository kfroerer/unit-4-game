
var wins = 0;
var losses = 0;
var userScore = 0;
var targetMin = 19
var targetMax = 120;
var gemMin = 1;
var gemMax = 12;

var targetNum = myFunction(targetMin, targetMax);

function myFunction(targetMin, targetMax){
    return Math.floor(Math.random() * (targetMax-targetMin +1) + targetMin);
};
console.log(targetNum)


var gemValue = random(gemMin, gemMax);
function random (gemMin, gemMax){
    return Math.floor(Math.random() * (gemMax-gemMin +1) + gemMin);
};
console.log(gemValue)
// $("#newGame").on("click", function(){
//     $("target-number").text.targetNum;
// })
// $(".col-md-3").on("click", function (){
     
