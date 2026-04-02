// Global variables to hold game state
let secretNumber;
let triesCount;

// Get references to all the DOM elements
const guessInput = document.getElementById('guess');
const feedbackEl = document.getElementById('feedback');
const triesEl = document.getElementById('tries');
const hintList = document.getElementById('hintList');
const guessButton = document.querySelector('button');

/**
 * Initializes or resets the game.
 * This function is called once on load and again after a win.
 */
function startGame() {
  // 1. Generate the secret number
  secretNumber = Math.floor(Math.random() * 10) + 1;

  // 2. Reset tries
  triesCount = 0;
  triesEl.textContent = "Tries: 0";

  // 3. Clear old feedback
  feedbackEl.textContent = "Good luck!";

  // 4. Re-enable the input and button
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.value = "";

  // 5. Use a FOR loop and innerHTML to list numbers 1–10
  let listHTML = "";
  for (let i = 1; i <= 10; i++) {
    listHTML += "<li>" + i + "</li>";
  }
  hintList.innerHTML = listHTML;
}

/**
 * This function is called by the button's onclick attribute.
 * It checks the player's guess.
 */
function runJS() {
  const guess = parseInt(guessInput.value);

  // 1. Handle invalid input (out of range)
  if (isNaN(guess) || guess < 1 || guess > 10) {
    feedbackEl.textContent = "Please enter a number between 1 and 10.";
    return; // Stop the function
  }

  // 2. Valid guess, so increment tries
  triesCount++;
  triesEl.textContent = `Tries: ${triesCount}`;

  // 3. Check the guess
  if (guess < secretNumber) {
    feedbackEl.textContent = "Too low! Guess again.";
  } else if (guess > secretNumber) {
    feedbackEl.textContent = "Too high! Guess again.";
  } else {
    // 4. Handle a win
    feedbackEl.textContent = `You win! It took ${triesCount} tries. Game resetting...`;
    guessInput.disabled = true;
    guessButton.disabled = true;

    // Reset the game after 2 seconds
    setTimeout(startGame, 2000);
  }
}

// Start the game for the first time when the page loads
startGame();
