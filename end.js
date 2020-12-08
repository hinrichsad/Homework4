
//gets score from the last taken quiz 
var mostRecentScore = localStorage.getItem("mostRecentScore");
JSON.parse(mostRecentScore);
console.log(mostRecentScore);
localStorage.setItem(highScores, JSON.stringify(highScores));

$(document).ready(function () {

    $("#finalScore").text(mostRecentScore);

});
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

    highScores.unshift(scoreInput);
    console.log(highScores);

    localStorage.setItem(highScores, JSON.stringify("highScores"));



    for(var i = 0; i >= 5; i++){
        $(".list-group-item").text(highScores[i].name + " scored " + highScores[1].score) + " %";
    }
    console.log(highScores);


});


function renderHighscoreList(){
    var getName = localStorage.getItem("name");
    var getMyScore = localStorage.getItem("myScore");

    if (!getMyScore || !getName){
        return
    }
    

}

var highScores = []



