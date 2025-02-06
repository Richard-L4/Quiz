const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

// Add event listener for "Clear High Scores" button
const clearScoresBtn = document.getElementById("clearScoresBtn");

clearScoresBtn.addEventListener("click", () => {
    localStorage.removeItem("highScores"); // Clear stored high scores
    highScoresList.innerHTML = ""; // Remove displayed scores

    alert("High scores cleared!");
});