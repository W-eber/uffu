// JavaScript code for handling the game logic
let username = "";
let score = 0;
let universalScore = 0;

document.getElementById("submit").addEventListener("click", () => {
    const inputUsername = document.getElementById("username").value;
    if (/^[a-z0-9_]+$/.test(inputUsername)) {
        username = inputUsername;
        document.getElementById("username-form").style.display = "none";
    } else {
        alert("Invalid username. Use only lowercase letters, numbers, and underscores.");
    }
});

document.getElementById("click-area").addEventListener("click", () => {
    score++;
    universalScore++;
    document.getElementById("score").textContent = score;
    document.getElementById("universal-score").textContent = universalScore;
});

// You would need to implement code for updating the leaderboard with AJAX requests to your server.
// This is just a basic template for the client-side code.

// Sample leaderboard entry
function createLeaderboardEntry(username, score) {
    const li = document.createElement("li");
    li.textContent = `${username}: ${score}`;
    return li;
}

// Example usage:
const leaderboard = document.getElementById("leaderboard");
leaderboard.appendChild(createLeaderboardEntry("User1", 100));
leaderboard.appendChild(createLeaderboardEntry("User2", 80));
