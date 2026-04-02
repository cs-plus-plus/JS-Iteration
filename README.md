# Unit 8.4 – Iteration: Guessing Game 🎯

## Overview
In this assignment, you'll use **for loops**, **conditional logic**, and **innerHTML** to create a simple number guessing game. The player will guess a number between 1 and 10, and the program will respond with hints until they get it right.

This lesson focuses on **iteration (loops)** — using a `for` loop to generate content and connecting JavaScript logic to HTML elements.

---

## Learning Objectives
- Practice using **`for` loops** to generate repeated content.
- Use **`innerHTML`** to build and insert HTML from a loop.
- Use conditionals (`if` / `else`) to provide feedback to the user.
- Update webpage elements dynamically using `document.getElementById()` and `textContent`.

---

## Instructions

### Step 1: Set Up Your HTML
Your `index.html` must include:
- An input with `id="guess"` where the user enters their number.
- A button that calls your function `runJS()`.
- A `<p>` or `<div>` with `id="feedback"` to show hints (like "Too high!" or "Too low!").
- A `<p>` with `id="tries"` to display the number of attempts.
- A `<ul>` or `<ol>` with `id="hintList"` that will be filled with numbers 1–10 using a **for loop** and **innerHTML**.

Example (simplified):
```html
<input id="guess" type="number" min="1" max="10">
<button onclick="runJS()">Guess</button>
<p id="feedback"></p>
<p id="tries"></p>
<ol id="hintList"></ol>
```

---

### Step 2: Add Your JavaScript
In your `script.js` file, you will:
1. Generate a random number between 1 and 10 using `Math.floor(Math.random() * 10) + 1`.
2. Use a **for loop** to build a string of `<li>` tags for numbers 1 through 10, then set `innerHTML` on `#hintList`.
3. Use `textContent` to update:
   - `#feedback` (e.g., "Too high!", "Too low!", "You win!")
   - `#tries` (number of attempts so far)

Example of using a for loop with innerHTML:
```javascript
let listHTML = "";
for (let i = 1; i <= 10; i++) {
  listHTML += "<li>" + i + "</li>";
}
document.getElementById("hintList").innerHTML = listHTML;
```

---

### Step 3: Behavior Requirements
✅ Must use a **for loop** to populate the hint list with `innerHTML`.
✅ Must use **`innerHTML`** (not `appendChild` or `createElement`).
✅ Must show **feedback** on the page, not in alerts or prompts.
✅ Must keep track of the **number of tries**.
✅ Must handle invalid input (e.g., non-numeric or out-of-range values).

---

### Submission
Commit your **`index.html`** and **`script.js`** files to GitHub.
Ensure all autograder tests pass for:
✅ Required elements
✅ For loop present in script.js
✅ innerHTML used to populate the hint list
✅ Invalid input handling
✅ Game logic and tries counter
