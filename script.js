'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 15;
let hasWon = false;
var highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (hasWon) {
  } 
  else if (score == 1) {
    score--;
    hasWon = true; //using haswon here so that all the if statements wont be triggered again(as score is already 0)
    document.querySelector('.message').textContent = '💥 you lost the game';
    document.querySelector('body').style.backgroundColor = '#f70d1a';
    document.querySelector('.score').textContent = score;
  } 
  else if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  } 
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    hasWon = true;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    changeText('.message', ' 📈 Too High!');
    score--;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  hasWon = false;
  score = 15;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

function changeText(className, text) {
  document.querySelector(className).textContent = text;
}
