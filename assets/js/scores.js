let highScores = document.querySelector("#highscores");
let clearBtn = document.querySelector("#clear");

let lastUser = JSON.parse(localStorage.getItem("user"));
console.log(lastUser)


let highScore = document.createElement("li")
highScore.innerText = `${lastUser.initials} - ${lastUser.userScore}/5` //template literals to display values of object (stack overflow)
highScores.appendChild(highScore);



clearBtn.addEventListener("click", function () {
    localStorage.clear();
    highScores.remove();
})