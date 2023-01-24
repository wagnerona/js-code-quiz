let highScores = document.querySelector("#highscores");
let clearBtn = document.querySelector("#clear");

// let highScore = document.createElement("li")

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);

//     highScore.innerText += key + value;
//     highScores.appendChild(highScore);
// }









let lastUser = JSON.parse(localStorage.getItem("user"));
console.log(lastUser)


let highScore = document.createElement("li")
highScore.innerText = `${lastUser.initials} - ${lastUser.userScore}/5` //template literals to display values of object (stack overflow)
highScores.appendChild(highScore);



clearBtn.addEventListener("click", function () {
    localStorage.clear();
    highScores.remove();
})