
var wins = 0;
var losses = 0;
var userScore = 0;
var gems = [];
// var gemImages = ["./assets/images/purplecrystal.jpg", "./assets/images/bluecrystal.jpg", "./assets/images/redcrystal.jpg", "./assets/images/Orange-Crystals.jpg" ]
//generate target number
var gemValuearr = [];
var targetNum = myFunction();
function myFunction(){
    return Math.floor(Math.random() * (102) + 19);
};
console.log(targetNum)

var gemValueSum = function(total,num){
    return total + num;
};


//have an array of image locations??????
$(document).ready(function() {
//generate 4 random numbers for gems 
$("#newGame").on("click", function(){
    $("#target-number").text(targetNum); 
    for (var i = 0; i < 4; i++) {
        var gemValue = Math.floor(Math.random() * (12) + 1);
        gems[i] = gemValue;
        // var gemItem = $("<div>")
        // gemItem.addClass("col-md-3")
        // var gemImage = $("<img>")
        // gemImage.attr({height: 200, width: 200, src:gemImages[i]})
        // gemItem.append(gemImage);
        // $('#gemRow').append(gemItem);
        console.log(gems);
    }
});

$("#gem1").on('click', function(){
    var gem1 = gems[0];
    gemValuearr.push(gem1);
    console.log(gemValuearr);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
//don't know if above is better than below option.... how to use "this" or update userscore and 
//still beable to use updated value globally
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
    
// capture click values and update userscore var
//use userscore var to update #userscore

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
})


    
    
    
//TODO update user score
// add if/then statements to update wins/losses/reset the game


     
