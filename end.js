var mostRecentScore = localStorage.getItem("mostRecentScore");
JSON.parse(mostRecentScore);
console.log(mostRecentScore);

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

    highScores.push(scoreInput);
});


var highScores = [{
    name: "",
    score: "",
}, ]

console.log(highScores);