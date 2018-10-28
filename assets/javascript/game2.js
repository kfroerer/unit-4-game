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
    
    var gemValueSum = function(total,num){
        return total + num;
    };

    function startGame(){
        targetNum = myFunction();
        $("#target-number").text(targetNum); 
        for (var i = 0; i < 4; i++) {
            var gemValue = Math.floor(Math.random() * (12) + 1);
            gems[i] = gemValue;
            console.log(gems);
    }
    }
    
    var checkWin = function(){
        console.log("cheching")
        if (gemValuearr.reduce(gemValueSum) === targetNum){
            alert("You win!!!");
            wins++;
            $('#wins').text(wins);
            
        }
        if (gemValuearr.reduce(gemValueSum) > targetNum){
            alert("You lose!");
            losses++;
            $('#losses').text(losses);
            }
        }  
    
    function clearGame(){        
        $("#userScore").empty();
        targetNum = "";
        gemValuearr = [];
        $("#target-number").text(targetNum);
         
    }

$("#clear").on('click', function(){
    clearGame();
})    

$("#again").on("click", function(){
    startGame();    
})
    
$("#gem1").on('click', function(){
    var gem1 = gems[0];
    gemValuearr.push(gem1);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
    checkWin();
});

$("#gem2").on('click', function(){
    var gem2 = gems[1];
    gemValuearr.push(gem2);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
    checkWin();
});

$("#gem3").on('click', function(){
    var gem3 = gems[2];
    gemValuearr.push(gem3);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
    checkWin();
});    
$("#gem4").on('click', function(){
    var gem4 = gems[3];
    gemValuearr.push(gem4);
    $('#userScore').text(gemValuearr.reduce(gemValueSum));
    
    checkWin();

});

});
