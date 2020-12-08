var mostRecentScore = localStorage.getItem("mostRecentScore");
JSON.parse(mostRecentScore);
console.log(mostRecentScore);
localStorage.setItem(highScores, JSON.stringify(highScores));

$(document).ready(function () {

    $("#finalScore").text(mostRecentScore);

});

$("#submit").on("click", function () {
    var name = $("#name").val();
    var myScore = mostRecentScore;

    var scoreInput = {
        name: name,
        score: myScore
    }

    highScores.unshift(scoreInput);
    console.log(highScores);

    localStorage.setItem(highScores, JSON.stringify("highScores"));



    for(var i = 0; i >= 5; i++){
        $(".list-group-item").text(highScores[i].name + " scored " + highScores[1].score) + " %";
    }
    console.log(highScores);


});




var highScores = []



