// Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;
const maxAttempts = 7;

initializeGame();

// Event listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("Random number: " + randomNumber);

    attempts = 0;

    document.querySelector("#resetBtn").style.display = "none";
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.value = "";
    playerGuess.focus();

    document.querySelector("#feedback").textContent = "";
    document.querySelector("#guesses").textContent = "";
    document.querySelector("#attemptsLeft").textContent = "Attempts left: " + maxAttempts;
    document.querySelector("#score").textContent = "Wins: " + wins + " | Losses: " + losses;
}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    let guess = Number(document.querySelector("#playerGuess").value);

    feedback.textContent = "";

    if (isNaN(guess) || guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }

    attempts++;

    document.querySelector("#guesses").textContent += guess + " ";
    document.querySelector("#attemptsLeft").textContent = "Attempts left: " + (maxAttempts - attempts);

    if (guess === randomNumber) {
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";
        wins++;
        document.querySelector("#score").textContent = "Wins: " + wins + " | Losses: " + losses;
        gameOver();
    } else if (attempts === maxAttempts) {
        feedback.textContent = "Sorry, you lost! The number was " + randomNumber;
        feedback.style.color = "red";
        losses++;
        document.querySelector("#score").textContent = "Wins: " + wins + " | Losses: " + losses;
        gameOver();
    } else if (guess > randomNumber) {
        feedback.textContent = "Guess was high";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Guess was low";
        feedback.style.color = "orange";
    }

    document.querySelector("#playerGuess").value = "";
    document.querySelector("#playerGuess").focus();
}

function gameOver() {
    document.querySelector("#guessBtn").style.display = "none";
    document.querySelector("#resetBtn").style.display = "inline";
}