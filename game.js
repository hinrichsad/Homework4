$(document).ready(function () {

        //using an array of object for my question list
        const questionList = [{
            question: "Question with answer A",
            answers: ["A", "B", "C", "D"],
            correctAnswer: "A"
        }, {
            question: "Question with answer C",
            answers: ["A", "B", "C", "D"],
            correctAnswer: "C"
        }, {
            question: "Question with answer A",
            answers: ["A", "B", "C", "D"],
            correctAnswer: "A"
        }, {
            question: "Question with answer D",
            answers: ["A", "B", "C", "D"],
            correctAnswer: "D"
        }, {
            question: "Question with answer D",
            answers: ["A", "B", "C", "D"],
            correctAnswer: "D"
        }, {
            question: "Question with answer B",
            answers: ["A", "B", "C", "D"],
            correctAnswer: "B"
        }]

        var maxQuestion = 4;
        var maxScore = 100;
        var currentScore = 0;
        
        function startGame(){
            currentScore = 0;
            usableQuestions = questionList;
            renderQuestion();   
        }

        function renderQuestion(){
            listIndex = Math.floor(Math.random * questionList.length);
            currentQuestion = questionList[listIndex]
        };
});