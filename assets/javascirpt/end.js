const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScoreElement = document.getElementById("finalScore");
const messageElement = document.getElementById("message");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const topScores = JSON.parse(localStorage.getItem("topScores")) || [];
const MAX_HIGH_SCORES = 10;

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
            messageElement.innerText = "Maybe it's not your day";
        } else if (finalScore >= 1 && finalScore <= 3) {
            messageElement.innerText = "Someone needs to study";
        } else if (finalScore >= 4 && finalScore <= 6) {
            messageElement.innerText = "Not bad, you're on the right track";
        } else if (finalScore >= 6 && finalScore <= 8) {
            messageElement.innerText = "Getting there, keep it up";
        } else if (finalScore >= 8 || finalScore === 9) {
            messageElement.innerText = "Well done, you know your subjuct!";
        } else if (finalScore === 10) {
            messageElement.innerTExt = "Expert!";
        } else {
            messageElement.innerText = "Oops, something went wrong."
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

saveTopScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    topScores.push(score);

    topScores.sort((a,b) => b.score - a.score)

    topScores.splice(5);

    localStorage.setItem("topScores", JSON.stringify(topScores));
    return document.location.assign("index.html");
};