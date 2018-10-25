$(document).ready(function(){
var wins = 0;
var losses = 0;
var userScore = gemValueSum;
var gems = [];
var gemValuearr = [];
// var isNumber = true;
// var isDone = false;
var targetNum = myFunction();
function myFunction(){
    return Math.floor(Math.random() * (102) + 19);
};
console.log(targetNum)

var gemValueSum = function(total,num){
    return total + num;
};
var startGame = function(){
    $("#target-number").text(targetNum); 
    for (var i = 0; i < 4; i++) {
        var gemValue = Math.floor(Math.random() * (12) + 1);
        gems[i] = gemValue;
        console.log(gems);
}
}
startGame()

var checkWin = function(){
    if (gemValueSum === targetNum){
        alert("You win!!!");
        wins++;
        $('#wins').text(wins);
        clearGame();  
    }
    if (gemValueSum > targetNum){
        alert("You lose!");
        losses++;
        $('#losses').text(losses);
        }
        clearGame();
    }  
checkWin();

var clearGame = function(){        
    $("#userScore").empty();
    $("#target-number").empty();
    gemValuearr = [];  
    startGame(); 
  });
}
       


//generate 4 random numbers for gems 
// $("#newGame").on("click", function(){
//     $("#target-number").text(targetNum); 
//     for (var i = 0; i < 4; i++) {
//         var gemValue = Math.floor(Math.random() * (12) + 1);
//         gems[i] = gemValue;
//         console.log(gems);
//     }
// });

$("#gem1").on('click', function(){
    var gem1 = gems[0];
    gemValuearr.push(gem1);
    console.log(gemValuearr);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
  
});
$("#gem2").on('click', function(){
    var gem2 = gems[1];
    gemValuearr.push(gem2);
    console.log(gemValuearr);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));


});
$("#gem3").on('click', function(){
    var gem3 = gems[2];
    gemValuearr.push(gem3);
    console.log(gemValuearr);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
  
});    
$("#gem4").on('click', function(){
    var gem4 = gems[3];
    gemValuearr.push(gem4);
    console.log(gemValuearr);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
  
});

// $(".clear").on("click", function(){
//     $("#userScore").empty();
//     $("#target-number").empty();
//     gemValuearr = [];   
//   });

});


        // if(isDone){
    //     $("#clear").trigger("click");
    //     isDone = false;
    // }else {
    //     if(isNumber) {
    //         wins++
    //         $("#wins").text(wins);

    //     }
    // }



//if (userScore >= targetNum){
    //some boolean statement to prevent future clicks
    //losses ++
    //alert ("You lose. Play again");
    //
    //}else {
        //wins ++
        //alert ("Winner!! Please play again");
        //boolean statement
            // }
    

     //also need to reset just the target number and gem values, not wins or losses       


    
    
    
//TODO
// add if/then statements to update wins/losses/reset the game


     
