//DOM elements
let highScores = document.querySelector("#highscores");
let clearBtn = document.querySelector("#clear");


// Retrieve updated array from local storage
let lastUsers = JSON.parse(localStorage.getItem("users"));
console.log(lastUsers);

if (lastUsers === null) {
    lastUsers === [];
    //if highscores is empty it lets the array as empty so no errors show up in console
} else {
    lastUsers.forEach(lastUser => {
        let highScore = document.createElement("li")
        //function to create li element
        highScore.innerText = `${lastUser.initials} - ${lastUser.userScore}/5` //template literals to display values of object (stack overflow)
        highScores.appendChild(highScore);
        //appends the values to highsScores organized list in HTML
    });
}


//clear highscores 
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    highScores.remove();
})