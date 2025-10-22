# Unit 8.4 – Iteration: Guessing Game 🎯

## Overview
In this assignment, you’ll use **loops**, **conditional logic**, and **DOM manipulation** to create a simple number guessing game. The player will guess a number between 1 and 10, and the program will respond with hints until they get it right.

This lesson focuses on **iteration (loops)** — both `for` and `while` loops — and on connecting JavaScript logic to HTML elements via `textContent`.

---

## Learning Objectives
- Practice using **`while` loops** for repeated checking (e.g., guessing until correct).
- Practice using **`for` loops** to generate content (e.g., listing numbers 1–10).
- Use conditionals (`if` / `else`) to provide feedback to the user.
- Update webpage elements dynamically using `document.getElementById()` and `textContent`.

---

## Instructions

### Step 1: Set Up Your HTML
Your `index.html` must include:
- An input with `id="guess"` where the user enters their number.
- A button that calls your function `runJS()`.
- A `<p>` or `<div>` with `id="feedback"` to show hints (like “Too high!” or “Too low!”).
- A `<p>` with `id="tries"` to display the number of attempts.
- A `<ul>` or `<ol>` with `id="hintList"` that will be filled with numbers 1–10 using a **for loop**.

Example (simplified):
```html
<input id="guess" type="number" min="1" max="10">
<button onclick="runJS()">Start / Guess</button>
<p id="feedback"></p>
<p id="tries"></p>
<ul id="hintList"></ul>
```

---

### Step 2: Add Your JavaScript
In your `script.js` file, you will:
1. Generate a random number between 1 and 10 using `Math.floor(Math.random() * 10) + 1`.
2. Use a **for loop** to populate `#hintList` with numbers 1 through 10.
3. Use a **while loop** to continue checking guesses until the correct number is found.
4. Use `textContent` to update:
   - `#feedback` (e.g., “Too high!”, “Too low!”, “You win!”)
   - `#tries` (number of attempts so far)
5. Disable and enable the input/button as needed (`disabled = true/false`).

---

### Step 3: Behavior Requirements
✅ Must use both a **for loop** and a **while loop**.  
✅ Must show **feedback** on the page, not in alerts or prompts.  
✅ Must keep track of the **number of tries**.  
✅ Must reset the game after a win.  
✅ Must handle invalid input (e.g., non-numeric or out-of-range values).

---

### Example Pseudocode
```js
function runJS() {
  // Step 1: set up variables
  let secret = Math.floor(Math.random() * 10) + 1;
  let guess = Number(document.getElementById("guess").value);
  let tries = 0;

  // Step 2: fill the list
  let hintList = document.getElementById("hintList");
  hintList.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    hintList.innerHTML += "<li>" + i + "</li>";
  }

  // Step 3: while loop for guessing logic
  while (guess !== secret) {
    tries++;
    if (isNaN(guess) || guess < 1 || guess > 10) {
      document.getElementById("feedback").textContent = "Invalid input!";
      return;
    } else if (guess < secret) {
      document.getElementById("feedback").textContent = "Too low!";
    } else if (guess > secret) {
      document.getElementById("feedback").textContent = "Too high!";
    }
    document.getElementById("tries").textContent = "Tries: " + tries;
    return; // waits for next guess input
  }

  // Step 4: user guessed correctly
  document.getElementById("feedback").textContent = "You win!";
  document.getElementById("tries").textContent = "Tries: " + tries;
}
```

---

## Mapped Standards

### College Board AP Computer Science Principles (CSP) Framework
**Big Idea 3: Algorithms and Programming (AAP)**  
- **AAP-2.A**: Develop algorithms that use sequences, selection, and iteration.  
- **AAP-2.E**: Use iteration statements to simplify repetitive tasks.  
- **AAP-3.A**: Use variables and logic to manage program state and output.

---

## Reflection Questions
1. How does a `while` loop differ from a `for` loop in purpose?  
2. Why do we use `Math.floor(Math.random() * 10) + 1` instead of just `Math.random()`?  
3. What happens if you forget to update the value being tested inside your loop?

---

### Submission
Commit your **`index.html`** and **`script.js`** files to GitHub.  
Ensure all autograder tests pass for:  
✅ Required elements  
✅ Invalid input handling  
✅ Tries counter updates  
✅ For-loop creation  
✅ While-loop presence  

---

**End of Assignment — Unit 8.4 Iteration: Guessing Game**
