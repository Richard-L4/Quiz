// const to set top score list using JSON.parse to get scores from local storage and convert back to integer

const topScoresList = document.getElementById("topScoresList");
const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

// .map used to take recent top scores and create list of names and scores using template literal

topScoresList.innerHTML = topScores
  .map((score) => {
    return `<li class="top-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

// Add event listener for "Clear High Scores" button
const clearScoresBtn = document.getElementById("clearScoresBtn");

clearScoresBtn.addEventListener("click", () => {
  localStorage.removeItem("topScores"); // Clear stored high scores
  topScoresList.innerHTML = ""; // Remove displayed scores

  // alert to pop up like a bootstrap modal to let user know top scores cleared

  Swal.fire("Top scores cleared!");
});
