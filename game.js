$(document).ready(function () {

        //using an array of object for my question list
        var questionList = [{
            question: "1 + 1",
            answers: ["2", "5", "6", "8"],
            correctAnswer: "A"
        }, {
            question: "2 + 2",
            answers: ["6", "1", "4", "9"],
            correctAnswer: "C"
        }, {
            question: "3 + 3",
            answers: ["6", "0", "9", "1"],
            correctAnswer: "A"
        }, {
            question: "4 + 4",
            answers: ["0", "12", "1", "8"],
            correctAnswer: "D"
        }, {
            question: "5 + 5",
            answers: ["1778", "1809", "4", "10"],
            correctAnswer: "D"
        }, {
            question: "6 + 6",
            answers: ["1", "12", "34", "7"],
            correctAnswer: "B"
        }]

        var maxQuestion = 4;
        var maxScore = 100;
        var currentScore = 0;
        questionCount = 0;
        scorePer = maxScore/maxQuestion;
        
        // runs "startGame" on load
        $(document).ready(function () {
            startGame();
        });

        //resets the stats and time from last played and imediately renders next question
        //this also resets the list of usable questions to the original array "questionList"
        function startGame(){
            currentScore = 0;
            usableQuestions = questionList;
            renderQuestion();   
        }

        //upon answering a question, this will render a new question
        //checks for question count and uses an if/then to decide whether or not to render -> if not then reroute to end.html
        //this will also read and interp. each answer as either correct or incorrect
        $(".answerChoice").on("click", function (event) {
            
            var selected = event.target;
            var selectedValue = $(selected).attr("value");

            console.log(selectedValue);
            console.log(questionList[listIndex].correctAnswer)

            if(selectedValue == questionList[listIndex].correctAnswer){
                
                console.log("Correct");
                currentScore+= scorePer;
                console.log(currentScore);
            }
            
            
            if(questionCount < maxQuestion){
                renderQuestion();
                var mostRecentScore = currentScore;
                console.log(mostRecentScore)
            }else{
                localStorage.setItem('mostRecentScore', JSON.stringify(currentScore));

                window.location.href = "end.html";
            }

        });

        //creates a random number 1 - the length of the **usable question list and uses that number as the index of the question matrix
        //incriments questionCount by 1 each time
        //I then assigned each question to a button and the question to the card above. 
        function renderQuestion(){
            listIndex = Math.floor(Math.random() * usableQuestions.length);
            currentQuestion = usableQuestions[listIndex];

            questionCount++;

            $("#question").text(currentQuestion.question); 
            $("#ac1").text(currentQuestion.answers[0]);  
            $("#ac2").text(currentQuestion.answers[1]);
            $("#ac3").text(currentQuestion.answers[2]);
            $("#ac4").text(currentQuestion.answers[3]);    

        };
});