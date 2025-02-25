// constants to allow the DOM to access info from html

const player = document.getElementById("player");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScoreElement = document.getElementById("finalScore");
const messageElement = document.getElementById("message");
const latestScore = localStorage.getItem("latestScore");

const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

// function to display final score

function displayFinalScore() {
  if (latestScore !== null) {
    let finalScore = parseInt(latestScore, 10);

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

        document.documentElement.style.setProperty(
          "background-color",
          "rgba(50, 205, 50)"
        );
      } else {
        messageElement.innerText = "Oops, something went wrong.";
      }
    }
  }
}

// Call function when page loads using event listener and key up
displayFinalScore();

player.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !player.value;
});

/*  function to save scores. const score key value pair , push , sort method to put scores in order
 of highest to lowest , splice to delete any score beyond 5 most recent scores and local storage used to store
 recent scores with JSON stringfy to return top scores and document re assign to return to home index page  */

const saveTopScore = (e) => {
  e.preventDefault();

  // Check if the player has entered a name
   

  if (!player.value.trim()) {
    // Use SweetAlert to show the alert
    Swal.fire({
      icon: 'warning',
      title: 'Oops!',
      text: 'Please enter your call sign before saving your score.',
    });
    return; // Stop the function from executing further if no name is entered
  }

  const score = {
    score: latestScore,
    name: player.value,
  };
  topScores.push(score);

  topScores.sort((a, b) => b.score - a.score);

  topScores.splice(5);

  localStorage.setItem("topScores", JSON.stringify(topScores)); //stringfy  to convert integer to string as local storage only holds strings
  return document.location.assign("index.html");
};

// Attach event listener to save button

saveScoreBtn.addEventListener("click", saveTopScore);
