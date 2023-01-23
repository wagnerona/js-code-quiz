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

let currentQuestionIndex = 0;

// The startGame function is called when the start Quiz is clicked
function startGame() {
  timerCount = 30;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer();
  currentQuestionIndex = 0;
  startScreen.remove();
  setQuestion(quizQuestions[currentQuestionIndex]);
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
  }, 800);
}

function setQuestion(quizQuestions) {
  questionScreen.setAttribute("class", "show");
  questionTitle.innerText = quizQuestions.prompt;
  choices.innerHTML = "";
  for (let i = 0; i < quizQuestions.answers.length; i++) {
    let answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "choiceBtn");
    answerBtn.innerText = quizQuestions.answers[i];
    answerBtn.addEventListener("click", selectAnswer);
    choices.appendChild(answerBtn);
  }

}

function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.innerText === quizQuestions[currentQuestionIndex].rightAnswer) {
    feedbackEl.innerText = "Correct!";
    feedbackEl.setAttribute("class", "feedback show correct");
    selectedButton.style.backgroundColor = "green";
  } else {
    feedbackEl.innerText = "Incorrect!";
    feedbackEl.setAttribute("class", "feedback show incorrect");
    selectedButton.style.backgroundColor = "red";
    // timerCount -= 10;
  } setTimeout(() => {
    feedbackEl.setAttribute("class", "hide");
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      setQuestion(quizQuestions[currentQuestionIndex]);
    } else {
      endQuiz();
    }
  }, 500);

}


function endQuiz() {
  questionTitle.innerText = "Quiz has come to an end"
  choices.setAttribute("class", "hide");
  
}

startButton.addEventListener("click", startGame);


