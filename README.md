# Module 6 Challenge Web APIs: Code Quiz

As I proceed in my journey to becoming a front-end web developer, it’s likely that I’ll be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges.

To help me become familiar with these tests and give me a chance to apply the skills from this module, this week’s challenge invites me to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I write. It will have a clean, polished, and responsive user interface.

## Deployed site

https://wagnerona.github.io/js-code-quiz/index.html

## Source code

https://github.com/wagnerona/password-generator

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

Create a code quiz that contains the following requirements:

- A start button that when clicked a timer starts and the first question appears.

  - Questions contain buttons for each answer.
  -
  - When answer is clicked, the next question appears
  -
  - If the answer clicked was incorrect then subtract time from the clock

- The quiz should end when all questions are answered or the timer reaches 0.

  - When the game ends, it should display their score and give the user the ability to save their initials and their score

## Mock-Up

The following GIF demonstrates the application functionality:

<img src = "./assets/gif/Coding Quiz.gif">

## Challenges and bugs

1. Input box for initials takes more than 3 characters and numbers, with more time I can add a if condition to check for these

2. Highscores is not sorted for highest to lowest score

3. Not really a bug but the sound of a correct answer or not was not included in the code

4. Code might be a bit messy, this has so far been one of the hardest challenges yet. I had to use resources from all over the place and at points doubted whether it was the correct way to do it, nonetheless it runs / could use some optimization

## Resources

https://www.youtube.com/@WebDevSimplified

https://javascript.info/

## License

Please read in repo.
