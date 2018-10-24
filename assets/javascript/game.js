
var wins = 0;
var losses = 0;
var userScore = 0;
var gems = [];
// var a = gems[0];
// var b = gems[1];
// var c = gems[2];
// var d = gems[3];
var gemImages = ["./assets/images/purplecrystal.jpg", "./assets/images/bluecrystal.jpg", "./assets/images/redcrystal.jpg", "./assets/images/Orange-Crystals.jpg" ]
//generate target number
var targetNum = myFunction();
function myFunction(){
    return Math.floor(Math.random() * (102) + 19);
};
console.log(targetNum)
//generate 4 random numbers for gems 


//have an array of image locations??????
$(document).ready(function() {

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
    $('#userScore').text(gem1);
});
$("#gem2").on('click', function(){
    var gem2 = gems[1];
    $('#userScore').text(gem2);
    console.log(gem2);
});
$("#gem3").on('click', function(){
    var gem3 = gems[2];
    $('#userScore').text(gem3);
});    
$("#gem4").on('click', function(){
    var gem4 = gems[3];
    $('#userScore').text(gem4);
});
    
});
    
    
    // console.log(valueAtIndex1)
    // $('userScore').append()

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

     
