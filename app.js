//Most of the variables
const letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersLeft = letters;
var lettersGuessed = "";
var computerLetter = computerGuess();
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Assign the HTML elements to variables
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesLeftText = document.getElementById("guessesLeftText");
var guessesSoFarText = document.getElementById("guessesSoFarText");

//Returns a random letter of the alphabet from the CONST letters
function computerGuess () {
    return letters[Math.floor(Math.random() * letters.length)]
}

//Sets the appropriate variables to their initial states to play a new game
function newGame () {
    guessesLeft = 9;
    computerLetter = computerGuess();
    lettersLeft = letters;
    lettersGuessed = "";
    updateGameScreen();
}

//Updates the appropriate HTML elements to display info to the user
function updateGameScreen () {
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFarText.textContent = lettersGuessed;
}

//Check to see if you exceeded the number of allowed guesses.
//Alerts the player they lost and starts a new game if so.
function checkLoss () {
    if (guessesLeft <= 0) {
        losses++;
        alert("You lose!");
        newGame();
    }
}

newGame;
document.onkeyup = function(event) {
    playerGuess = event.key;
    
    if (lettersLeft.includes(playerGuess)) {
        if (playerGuess === computerLetter) {
            wins++;
            alert("You win!");
            newGame();
        }
        else {
            lettersGuessed += playerGuess;
            lettersLeft = lettersLeft.replace(playerGuess, "");
            guessesLeft--;
            checkLoss();
        }
    }
    updateGameScreen();
}