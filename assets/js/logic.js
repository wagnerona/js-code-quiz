// DOM elements
let startButton = document.querySelector("#start");
let timerElement = document.querySelector("#time");
let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let quizEnd = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let submitBtn = document.querySelector("#submit");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");
let startDiv = document.querySelector(".wrapper");


// The startGame function is called when the start Quiz is clicked
function startGame() {
  timerCount = 30;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
  startScreen.remove();
  displayQuiz();
}


// timer 

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function displayQuiz() {
  questionScreen.setAttribute("class", "show");
  questionTitle.textContent = "test";
  console.log(questionTitle)
}


startButton.addEventListener("click", startGame);