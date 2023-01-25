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


// variables to be used later
let timer, timerCount
let score = 0;
let currentQuestionIndex = 0;

//function to start game once we click startGame
startButton.addEventListener("click", startGame);

// The startGame function is called when the start Quiz is clicked, sets a timer count and runs the functions for the quiz
function startGame() {
  timerCount = 30;
  startTimer();
  currentQuestionIndex = 0;
  startScreen.remove();
  setQuestion(quizQuestions[currentQuestionIndex]);
}


// Timer function that runs an interval function deducting timer count every second. If timer hits 0 it runs the endQuiz function 
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Set question function to display the current title and multiple choice options 
function setQuestion(quizQuestions) {
  questionScreen.setAttribute("class", "show");
  questionTitle.innerText = quizQuestions.prompt;
  // As question screen was hidden, we show it and then we change the inner text to the prompt of our question(title)
  choices.innerHTML = "";
  for (let i = 0; i < quizQuestions.answers.length; i++) {
    let answerBtn = document.createElement("button");
    // As our answers are arrays we run a for loop that creates a button
    answerBtn.setAttribute("class", "choiceBtn");
    // sets it class as a btn for styling
    answerBtn.innerText = quizQuestions.answers[i];
    // changes the inner text to the question and runs it for each index
    answerBtn.addEventListener("click", selectAnswer);
    choices.appendChild(answerBtn);
    // Finally it creates an event that tracks selected answer and appends the buttons to the choices Div in our HTML
  }

}


// Function for the click event in selection of answer 
function selectAnswer(e) {
  const selectedButton = e.target;
  //creating a variable and e.target refers to the button that was clicked 
  if (selectedButton.innerText === quizQuestions[currentQuestionIndex].rightAnswer) {
    feedbackEl.innerText = "Correct!";
    // if the selected button matches the correct answer in our index array we display a correct text
    feedbackEl.setAttribute("class", "feedback show correct");
    // unhides the element 
    selectedButton.style.backgroundColor = "green";
    // gives a color feedback of green for correct 
    score++;
    // updates the score count +1
  } else {
    feedbackEl.innerText = "Incorrect!";
    feedbackEl.setAttribute("class", "feedback show incorrect");
    selectedButton.style.backgroundColor = "red";
    timerCount -= 5;
    // same as before but for incorrect, only difference here is we lose timer count -5 seconds
  } setTimeout(() => {
    // after a correct or wrong answer we will wait 500 milliseconds before executing the following: 
    feedbackEl.setAttribute("class", "hide");
    // hides the feedback
    currentQuestionIndex++;
    //moves on to next question
    if (currentQuestionIndex < quizQuestions.length) {
      setQuestion(quizQuestions[currentQuestionIndex]);
      // if our current question is less than full length of our total questions, we set the next question of the quiz 
    } else {
      endQuiz();
      // else if we reached the end, the quiz ends
    }
  }, 500);

}

// function to end quiz
function endQuiz() {
  clearInterval(timer);
  //clear the interval counting down
  questionTitle.setAttribute("class", "hide");
  //hide questions
  choices.setAttribute("class", "hide");
  //hide choices
  quizEnd.setAttribute("class", "show");
  //show end screen
  finalScore.innerText = score + "/5";
  //show final score 
}

// Submit highScore event listener
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let user = {
    // create a variable of user info as objects 
    initials: initialsEl.value.trim(),
    // initials.value as we need what the user types as input
    userScore: score,
    //user score is the global score
  };


  if (user.initials === "") {
    alert("error, field cannot be blank");
  } else {
    alert("Registered successfully");
    // if statement that checks if input is empty or not
    console.log(user);
    //console log for debugging


    // Retrieve existing user array from local storage (stack overflow)
    let userArray = JSON.parse(localStorage.getItem("users")) || [];
    //returns first truthy value if there is previous highscores of if its empty, tricky solution from stack overflow bit confusing 

    // Push new user object to array
    userArray.push(user);

    // Store updated array in local storage
    localStorage.setItem("users", JSON.stringify(userArray));
  }
});


