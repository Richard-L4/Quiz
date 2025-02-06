const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScoreElement = document.getElementById("finalScore");
const messageElement = document.getElementById("message");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

/*finalScore.innerText = mostRecentScore;*/
function displayFinalScore() {
    if (mostRecentScore !== null) {
        let finalScore = parseInt(mostRecentScore, 10);

        finalScoreElement.innerText = finalScore; // Display score

        if (isNaN(finalScore)) {
            finalScore = 0; // Default to 0 if it's NaN
            messageElement.innerText = "There seems to be a problem with the score";
        } else {

        if (finalScore === 0) {
            messageElement.innerText = "Hopefully you learned something today";
        } else if (finalScore === 1) {
            messageElement.innerText = "Not bad but better luck next time";
        } else if (finalScore === 2) {
            messageElement.innerText = "You know your geography!";
        } else {
            messageElement.innerText = "There seems to be a problem with the score";
        }
        

        // Adjust message based on score
        
    }
}
}

// Call function when page loads
displayFinalScore();


username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    return document.location.assign("index.html");
};