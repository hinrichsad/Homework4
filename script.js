$(document).ready(function () {

    var highScores = [];

    function startGame(){
        currentScore = 0;
        usableQuestions = questionList;
        renderQuestion();   
    }

    $("#startQuiz").on("click", function () {
        startGame();
        
    });

    var getScores = localStorage.getItem('newBoard');
    JSON.parse(getScores);

    if(getScores !== null){
        getScores = highScores;
    }
    console.log(highScores);



    
    for(var i = 0; i <= highScores.length; i++){
        $("ul").append("<li>" + highScores.name + " scored a " + highScores.score + "% !");
    }

});
