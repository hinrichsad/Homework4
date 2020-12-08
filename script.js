$(document).ready(function () {

    function startGame(){
        currentScore = 0;
        usableQuestions = questionList;
        renderQuestion();   
    }

    $("#startQuiz").on("click", function () {
        startGame();
        
    });



});
