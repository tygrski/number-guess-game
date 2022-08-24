'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

//  set intial score to 20, use let bec. value will change. it is a 'STATE VARIALBE' bec it hold state of app
// hold score outside of function bec if we only stored in the dom the app wont know the score
let score = 20;

// display text message
const displayMessage = function(message) {
   document.querySelector('.message').textContent = message;
}

let playerName = document.querySelector('.playername').textContent;
// Start Game: enter value input & click check button to guess secret number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '....No Number📪';
    displayMessage('....No Number📪');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '....✅ Correct Number !';
    displayMessage('....✅ Correct Number !');
    // test to display random secretNumber on page
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // Add high score name
    document.querySelector('.highname').textContent = playerName;
    // add high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

// When guess is wrong
  } else if(guess !== secretNumber){
    if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ?'....☝🏽Too high !' : '....👇🏽Too low !' ;
        displayMessage(guess > secretNumber ?'....☝🏽Too high !' : '....👇🏽Too low !')
        score--;
        document.querySelector('.score').textContent = score;
  
        //   Out of guesses
      } else {
        // document.querySelector('.message').textContent = 'You lost the game🤬';
        displayMessage('You lost the game🤬');
        document.querySelector('.score').textContent = 0;
      }

    // When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '....☝🏽Too high !';
//       score--;
//       document.querySelector('.score').textContent = score;

//       //   Out of guesses
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game🤬';
//       document.querySelector('.score').textContent = 0;
//     }

//     // If guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '....👇🏽Too low !';
//       score--;
//       document.querySelector('.score').textContent = score;

//       //   Out of guesses
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game🤬';
//       document.querySelector('.score').textContent = 0;
//     }
  }
});

// Reset the game ,score, & CSS
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
//   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
