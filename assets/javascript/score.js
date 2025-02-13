// constants to allow the DOM to access info from html

const username = document.getElementById("username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScoreElement = document.getElementById("finalScore");
const messageElement = document.getElementById("message");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const topScores = JSON.parse(localStorage.getItem("topScores")) || [];
const MAX_HIGH_SCORES = 10;

// function to display final score 

function displayFinalScore() {
    if (mostRecentScore !== null) {
        let finalScore = parseInt(mostRecentScore, 10);

        finalScoreElement.innerText = finalScore; // Display score

        // if else statement to give feedback on amount of correct questions

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
        } else if (finalScore >= 8 && finalScore <= 9) {
            messageElement.innerText = "Well done, you know your subject!";
        } else if (finalScore === 10) {
            messageElement.innerText = "Expert!";

            // allows background color of page to change to green if score is 10 / 10

            document.documentElement.style.setProperty('background-color', 'rgba(50, 205, 50)'
        );
        } else {
            messageElement.innerText = "Oops, something went wrong.";
        }
        

        
        
    }
}
}

// Call function when page loads using event listener and key up
displayFinalScore();


username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

/*  function to save scores. const score key value pair , push , sort method to put scores in order
 of highest to lowest , splice to delete any score beyond 5 most recent scores and local storage used to store
 recent scores with JSON stringfy to return top scores and document re assign to return to home index page  */

 


saveTopScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    topScores.push(score);

    topScores.sort((a,b) => b.score - a.score);

    topScores.splice(5);

    localStorage.setItem("topScores", JSON.stringify(topScores)); //stringfy  to convert integer to string as local storage only holds strings
    return document.location.assign("index.html");
};

// Attach event listener to save button

saveScoreBtn.addEventListener("click", saveTopScore);
