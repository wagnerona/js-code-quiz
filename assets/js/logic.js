// DOM elements
let startButton = document.querySelector("#start");
let timerElement = document.querySelector("#time");
let startScreen = document.querySelector("start-screen");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let quizEnd = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let submitBtn = document.querySelector("#submit");
let initialsEl= document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");



let timer;
let timerCount;


// The startGame function is called when the start Quiz is clicked
function startGame() {
    timerCount = 30;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }


// timer 

function startTimer() {
      // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   if (isWin && timerCount > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
    //     winGame();
    //   }
    // }
    // // Tests if time has run out
    // if (timerCount === 0) {
    //   // Clears interval
    //   clearInterval(timer);
    //   loseGame();
    // }
  }, 1000);
}
// }

startButton.addEventListener("click", startGame);