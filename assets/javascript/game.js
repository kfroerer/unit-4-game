
var wins = 0;
var losses = 0;
var userScore = 0;
var gems = [];
var a = gems[0];
var b = gems[1];
var c = gems[2];
var d = gems[3];
//generate target number
var targetNum = myFunction();
function myFunction(){
    return Math.floor(Math.random() * (102) + 19);
};
console.log(targetNum)
//generate 4 random numbers for gems 
for (var i = 0; i < 4; i++) {
    var a = Math.floor(Math.random() * (12) + 1);
    gems[i] = a;
    console.log(gems);
}

$(document).ready(function() {

$("#newGame").on("click", function(){
    $("#target-number").text(targetNum);      
});

//TODO on click gem, pull value from array
// add that value to the user score
// add if/then statements to update wins/losses/reset the game
 
    
    
       
    // $("#gem2").on("click", function (){
    //     $('#userScore').text(gemValue);
    // })
    // $("#gem3").on("click", function (){
    //     $('#userScore').text(gemValue);
    // })
    // $("#gem4").on("click", function (){
    //     $('#userScore').text(gemValue);
    // })
})
     
