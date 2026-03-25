# CS++ JavaScript — Lesson 8.4: Iteration

> **Lesson 8.4** | 100 Points | 5 Autograded Tests

In this assignment you will build a number guessing game (1-10) using both `for` loops and `while` loops. You will practice DOM manipulation, user input handling, and dynamic content generation.

---

## Table of Contents

1. [Concepts You Need](#concepts-you-need)
2. [Project Overview](#project-overview)
3. [What to Build](#what-to-build)
4. [Required HTML Elements](#required-html-elements)
5. [File Structure](#file-structure)
6. [Autograding](#autograding)
7. [Try It Yourself — Practice Examples](#try-it-yourself--practice-examples)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

---

## Concepts You Need

### For Loops

Use a `for` loop when you know exactly how many times to repeat:

```javascript
// Print numbers 1 through 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

The three parts: `let i = 1` (start), `i <= 5` (condition), `i++` (increment).

### While Loops

Use a `while` loop when you do not know how many times you will repeat — you keep going until a condition becomes false:

```javascript
let guess = 0;
let answer = 7;

while (guess !== answer) {
    guess = parseInt(prompt("Guess a number:"));
}
console.log("Correct!");
```

### DOM Manipulation

Read and update HTML elements from JavaScript:

```javascript
// Get an element
let element = document.getElementById("feedback");

// Change its text
element.textContent = "Too high!";

// Read an input value
let input = document.getElementById("guess");
let value = parseInt(input.value);
```

### Creating Elements Dynamically

Add new elements to the page with JavaScript:

```javascript
let list = document.getElementById("hintList");

// Create a new list item
let li = document.createElement("li");
li.textContent = "Item 1";
list.appendChild(li);
```

### Math.random()

Generate random numbers:

```javascript
// Random integer between 1 and 10 (inclusive)
let answer = Math.floor(Math.random() * 10) + 1;
```

---

## Project Overview

Build a guessing game where:
1. A random number between 1 and 10 is generated
2. The user enters guesses
3. The page shows feedback ("Too high!", "Too low!", or "You win!")
4. A tries counter tracks the number of guesses
5. Numbers 1 through 10 are listed on the page using a `for` loop

---

## What to Build

### Using a For Loop
Populate the `#hintList` element with numbers 1 through 10. Each number should be a child element (like an `<li>`) containing the number.

### Using a While Loop
Your game logic should use a `while` loop or equivalent loop structure to keep accepting guesses until the user finds the correct answer.

### Game Behavior
- When the user enters a number and clicks the button, check their guess against the answer
- Show "Too high!", "Too low!", or "You win!" in the `#feedback` element
- Update the `#tries` element with the number of guesses so far
- Handle invalid input (non-numeric or out of range 1-10) by showing an appropriate message without counting it as a try

---

## Required HTML Elements

Your `index.html` must include these elements with these exact IDs:

| Element | ID | Purpose |
|---------|-----|---------|
| Text input | `guess` | Where the user types their guess |
| Button | (any) | Triggers the guess check |
| Paragraph/div | `feedback` | Shows "Too high!", "Too low!", "You win!" |
| Paragraph/div | `tries` | Shows the number of attempts |
| List (ul/ol) | `hintList` | Contains numbers 1-10 (populated by a for loop) |

### Starter HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Unit 8.4 - Iteration</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 10:</p>
    <input id="guess" type="number" min="1" max="10">
    <button onclick="runJS()">Guess</button>
    <p id="feedback"></p>
    <p id="tries"></p>
    <h3>Possible Numbers:</h3>
    <ul id="hintList"></ul>
</body>
</html>
```

---

## File Structure

```
JS-Iteration/
├── index.html              <-- Page structure with required IDs
├── script.js               <-- YOUR CODE GOES HERE
└── .github/
    └── workflows/
        └── classroom.yml   <-- Autograding tests (DO NOT MODIFY)
```

---

## Autograding

| Test | What It Checks | Points |
|------|---------------|--------|
| Required elements exist | `#guess`, `#feedback`, `#tries`, `#hintList`, and a button are present | 20 |
| Uses for AND while loops | Static analysis of `script.js` finds both loop types | 20 |
| For loop populates hintList | `#hintList` children contain numbers "1" through "10" | 20 |
| Invalid input handling | Out-of-range guess shows non-win feedback | 15 |
| Game logic + tries counter | Brute-force guesses 1-10, verifies tries increment and win message | 25 |

**Total: 100 points**

---

## Try It Yourself — Practice Examples

Create `practice.js` and run it with `node practice.js`.

**Example 1 — For loop basics:**
```javascript
// practice.js — for loop
for (let i = 1; i <= 10; i++) {
    console.log("Number: " + i);
}
// Output: Number: 1, Number: 2, ... Number: 10
```

**Example 2 — While loop with a counter:**
```javascript
// practice.js — while loop
let count = 0;
let target = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== target) {
    guess = Math.floor(Math.random() * 10) + 1;
    count++;
}
console.log("Found " + target + " after " + count + " tries");
```

**Example 3 — Building a list with a for loop:**
```javascript
// practice.js — simulating DOM list creation
let items = [];
for (let i = 1; i <= 10; i++) {
    items.push(i);
}
console.log("Hint list:", items);
// Output: Hint list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

## Tips for Success

1. Your code must contain **both** a `for` loop and a `while` loop — the test checks for this using static analysis
2. Use `document.createElement("li")` and `appendChild()` to add items to `#hintList`
3. Use `parseInt()` to convert the input value to a number
4. Update `textContent` (not `innerHTML`) for the feedback and tries elements
5. Generate the random answer when the page loads, not on every guess
6. Test by playing the game yourself — make sure the tries counter goes up and feedback changes

---

## FAQ

**Q: Does the for loop have to be used specifically for the hint list?**
Yes. The test checks that `#hintList` has child elements containing numbers 1 through 10 and that your code contains a `for` loop.

**Q: What should happen when the user guesses correctly?**
Show "You win!" (or similar win message) in `#feedback`. The test checks that guessing the correct number produces a different message than a wrong guess.

**Q: Do I need to reset the game after a win?**
The autograder does not test for reset functionality, but it is good practice. Focus on getting the core game logic working first.

**Q: What counts as invalid input?**
Numbers outside 1-10, empty input, or non-numeric input should show feedback without counting as a valid try.

---

View all assignments and scoring breakdowns at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
