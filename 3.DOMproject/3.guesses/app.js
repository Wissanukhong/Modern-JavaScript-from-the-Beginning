/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// game value
let min = 0;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

// game UI
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate
    if( isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum) {
        // Disable input
        guessInput.disabled = true;
        // Change border coler
        guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct, You Win`, 'green');

    } else {

    }
});

// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}