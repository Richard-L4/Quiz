const topScoresList = document.getElementById("topScoresList");
const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

topScoresList.innerHTML = topScores
    .map(score => {
        return `<li class="top-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

// Add event listener for "Clear High Scores" button
const clearScoresBtn = document.getElementById("clearScoresBtn");

clearScoresBtn.addEventListener("click", () => {
    localStorage.removeItem("topScores"); // Clear stored high scores
    topScoresList.innerHTML = ""; // Remove displayed scores

    alert("Top scores cleared!");
});