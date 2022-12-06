'use strict';
//* Sadece Deneme
/* document.querySelector('.message').textContent = '✌Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//* Starting to guess my number.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber + ' Do not cheat! :)');
let score = 20;
let highScore = 0;
const check = document.querySelector('.check');
const message = document.querySelector('.message');
let number = document.querySelector('.number');
let highScoreDOM = document.querySelector('.highscore');

check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //* WHEN THERE IS NO INPUT
    if (!guess) {
        message.textContent = '🤷‍♀️ No Number!';
    } else if (guess > 20) {
        message.textContent = 'Guess between 1-20 🤦‍♀️';
    }
    //* WHEN PLAYER WINS
    else if (guess === secretNumber) {
        message.textContent = '✌Correct Number!';
        number.textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        number.style.width = '25rem';

        if (score > highScore) {
            highScore = score;
            highScoreDOM.textContent = highScore;
        }
    }
    
    else if (guess !== secretNumber) {
        if (score > 1) {
            guess > secretNumber ? message.textContent ='Too high!' : message.textContent =' Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = 'Game is ower💨, lets try again!';
            document.querySelector('.score').textContent = 0;
            document.body.style.backgroundColor = 'red';
        }
    }

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    message.textContent = 'Start guessing...';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    document.querySelector('.guess').value = '';
    number.textContent = '?';
    console.log(secretNumber + ' Do not cheat! :)');
});