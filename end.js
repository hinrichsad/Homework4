//gets score from the last taken quiz 
var mostRecentScore = localStorage.getItem("mostRecentScore");
JSON.parse(mostRecentScore);
console.log(mostRecentScore);



$(document).ready(function () {

    var getScores = localStorage.getItem("newBoard");
    JSON.parse(newBoard);

    if (getScores !== null) {
        highScores = newBoard;
    }
    console.log(highScores);
    $("#finalScore").text(mostRecentScore);


    //takes input and saves the name and most recent score to local storage,
    //then turns them into an object and pushes them onto the previus Scores board

    $("#submit").on("click", function () {
        var name = $("#name").val();
        var myScore = mostRecentScore;

        localStorage.setItem("name", name);
        localStorage.setItem("score", myScore);

        var scoreInput = {
            name: name,
            score: myScore
        }

        var newBoard = highScores.unshift(scoreInput);
        console.log(newboard);


        storeObj();
        returnToStart();
    });

    function storeObj() {

        localStorage.setItem('newBoard', JSON.stringify(newBoard));
    }

    $("#restart").on("click", function () {
        storeObj();
        returnToStart();
    });

    function returnToStart() {
        window.location.href = "index.html";
    }
    var highScores = [];

    console.log(highScores);

});