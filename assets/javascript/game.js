$(document).ready(function(){
var wins = 0;
var losses = 0;
var userScore = 0;
var gems = [];
var gemValuearr = [];
// var isNumber = true;
// var isDone = false;
var targetNum = myFunction();
function myFunction(){
    return Math.floor(Math.random() * (102) + 19);
};
console.log(targetNum)



}

var gemValueSum = function(total,num){
    return total + num;

};

// var addValues = function(clickedCrystal){
//     currentScore += ;
//     $("#userScore").text(currentScore);
//     checkWin();
// }
// // userScore.text($(this).attr("data-sum"));
var startGame = function(){
    $("#target-number").text(targetNum); 
    for (var i = 0; i < 4; i++) {
        var clickedCrystal = Math.floor(Math.random() * (12) + 1);
        gems[i] = clickedCrystal;
        console.log(gems);
}
}
startGame()

var checkWin = function(){
    if (userScore === targetNum){
        alert("You win!!!");
        wins++;
        $('#wins').text(wins);
        clearGame();  
    }
    if (userScore > targetNum){
        alert("You lose!");
        losses++;
        $('#losses').text(losses);
        }
        clearGame();
    }  

function clearGame(){        
    $("#userScore").empty();
    $("#target-number").empty();
    gemValuearr = []; 
    userScore = 0; 
    startGame(); 
   }


$("#gem1").on('click', function(){
    var gem1 = gems[0];
    
    gemValuearr.push(gem1);
    console.log(gemValuearr);
    userScore = parseInt(gemValuearr.reduce(gemValueSum));
   $('#userScore').text(userScore);
   
    // userScore.text($(this).attr("data-sum"));
});

$("#gem2").on('click', function(){
    var gem2 = gems[1];
    gemValuearr.push(gem2);
    console.log(gemValuearr);
    userScore = parseInt(gemValuearr.reduce(gemValueSum));

    $('#userScore').text(userScore);
    
    // gemValueSum.attr("data-sum");
    // userScore.text($(this).attr("data-sum"));

});
$("#gem3").on('click', function(){
    var gem3 = gems[2];
    gemValuearr.push(gem3);
    console.log(gemValuearr);
    userScore = parseInt(gemValuearr.reduce(gemValueSum));
    $('#userScore').text(userScore);
    
    // gemValueSum.attr("data-sum");
    // userScore.text($(this).attr("data-sum"));
  
});    
$("#gem4").on('click', function(){
    var gem4 = gems[3];
    gemValuearr.push(gem4);
    console.log(gemValuearr);
    userScore = parseInt(gemValuearr.reduce(gemValueSum));
    $('#userScore').text(userScore);
    console.log("test")
   
    // gemValueSum.attr("data-sum");
    // userScore.text($(this).attr("data-sum"));
  
});

checkWin();

$("#clear").click(clearGame());




});
