'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 correct number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);
  if (!num) {
    document.querySelector('.message').textContent = '🚫 no number!';
  }
});
