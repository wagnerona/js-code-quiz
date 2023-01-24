let highScores = document.querySelector("#highscores");

let lastUser = JSON.parse(localStorage.getItem("user"));
// for (let i = 0; i < lastUser.length; i++) {
let highScore = document.createElement("li")
highScore.innerText = lastUser[0];
highScores.appendChild(highScore);

// }
