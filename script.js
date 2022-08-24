'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🏆';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// set secret  random number to value btw 1 -20
// / hold score outside of function bec if we only stored in the dom the app wont know the number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// test to display random secretNumber on page
document.querySelector('.number').textContent = secretNumber;

//  set intial score to 20, use let bec. value will change. it is a 'STATE VARIALBE' bec it hold state of app
// hold score outside of function bec if we only stored in the dom the app wont know the score
let score = 20;

// click check button to guess secret num
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = '....No Number📪'
    } else if(guess === secretNumber ){
        document.querySelector('.message').textContent = '....✅ Correct Number !'
    } else if(guess > secretNumber) {

        if(score > 1){
            document.querySelector('.message').textContent = '....☝🏽Too high !'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game🤬'
            document.querySelector('.score').textContent = 0;
        }

    
    } else if(guess < secretNumber){

        if (score > 1) {
        document.querySelector('.message').textContent = '....👇🏽Too low !'
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game🤬'
            document.querySelector('.score').textContent = 0;
    }
 } 
});

