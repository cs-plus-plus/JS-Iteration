# CS++ JavaScript — Lesson 8.4: Iteration

> **Lesson 8.4** | 100 Points | 5 Autograded Tests

In this assignment you will use `for` loops to list numbers and calculate a sum. Your code runs immediately when the page loads — no buttons, no DOM manipulation. Just `prompt()` for input and `alert()` for output.

---

## Table of Contents

1. [Concepts You Need](#concepts-you-need)
2. [Project Overview](#project-overview)
3. [Exact Requirements](#exact-requirements)
4. [File Structure](#file-structure)
5. [Autograding](#autograding)
6. [Try It Yourself — Practice Examples](#try-it-yourself--practice-examples)
7. [Tips for Success](#tips-for-success)
8. [FAQ](#faq)

---

## Concepts You Need

### For Loops

A `for` loop repeats a block of code a set number of times:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

The three parts inside the parentheses:
1. **Initialize** — `let i = 1` — runs once before the loop starts
2. **Condition** — `i <= 5` — checked before each iteration; loop stops when false
3. **Update** — `i++` — runs after each iteration

### Building a String with a Loop

You can use a loop to build up a string one piece at a time:

```javascript
let result = "";
for (let i = 1; i <= 3; i++) {
    result += i;       // result becomes "1", then "12", then "123"
}
console.log(result);   // "123"
```

To put commas between numbers (but not after the last one):

```javascript
let list = "";
for (let i = 1; i <= 4; i++) {
    if (i > 1) {
        list += ", ";
    }
    list += i;
}
console.log(list);   // "1, 2, 3, 4"
```

### Accumulating a Sum

Use a variable to keep a running total:

```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;   // adds i to the running total
}
console.log(sum);   // 15  (1 + 2 + 3 + 4 + 5)
```

### parseInt() and isNaN()

`parseInt()` converts a string to a whole number. `isNaN()` checks if a value is not a number.

```javascript
parseInt("5");      // 5
parseInt("hello");  // NaN
parseInt("");       // NaN
parseInt("-3");     // -3

isNaN("hello");     // true — not a valid number
isNaN("5");         // false — it is a valid number
```

---

## Project Overview

When your page loads, `script.js` runs immediately and does the following:

1. Asks the user for a positive number using `prompt()`
2. Validates the input
3. Uses a `for` loop to build a comma-separated list of numbers from 1 to N
4. Uses a `for` loop to calculate the sum of numbers from 1 to N
5. Shows both results using `alert()`

There are **no buttons**, **no HTML forms**, and **no DOM manipulation** in this assignment. Everything runs on page load.

---

## Exact Requirements

### Input
Call `prompt()` **exactly once** with the text: `Enter a positive number:`

### Validation
If the input is any of the following, alert exactly `Invalid input`:
- Empty string or whitespace
- Not a number (letters, symbols)
- Zero or a negative number
- User clicks Cancel (`null`)

### Output (two alerts)

**Alert 1 — Number List:**
A comma-separated list of numbers from 1 to N.

| Input | Alert Text (exact) |
|-------|-------------------|
| `5` | `1, 2, 3, 4, 5` |
| `3` | `1, 2, 3` |
| `1` | `1` |
| `10` | `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` |

**Alert 2 — Sum:**
The sum of all numbers from 1 to N, in the exact format `Sum: X`.

| Input | Alert Text (exact) |
|-------|-------------------|
| `5` | `Sum: 15` |
| `3` | `Sum: 6` |
| `1` | `Sum: 1` |
| `10` | `Sum: 55` |

### Rules
- Call `prompt()` exactly **once**
- Use a **`for` loop** — do not just hard-code the answer
- Do NOT use any DOM APIs (`document.getElementById`, `innerHTML`, etc.)
- Do NOT export functions or use `module.exports`
- Your code runs immediately at the top level of `script.js` — no function wrappers needed

---

## File Structure

```
JS-Iteration/
├── index.html              <-- Loads script.js (provided)
├── script.js               <-- YOUR CODE GOES HERE
└── .github/
    └── workflows/
        └── classroom.yml   <-- Autograding tests (DO NOT MODIFY)
```

**Edit only `script.js`.** Write all your code at the top level so it runs when the file loads.

---

## Autograding

When you push your code, GitHub Actions runs these tests:

| Test | Input | Expected | Points |
|------|-------|----------|--------|
| Invalid input | `abc`, `""`, `" "`, `-1`, `0`, `null` | Alert: `Invalid input` | 20 |
| Uses a for loop | — | Static analysis of script.js | 20 |
| Number list for N=5 | `5` | Alert: `1, 2, 3, 4, 5` | 20 |
| Sum for N=5 | `5` | Alert: `Sum: 15` | 20 |
| Works for N=3 | `3` | Alert: `1, 2, 3` then `Sum: 6` | 20 |

**Total: 100 points**

The tests mock `prompt()` to return specific values and check that `alert()` is called with the exact expected strings.

---

## Try It Yourself — Practice Examples

Create a file called `practice.js` in your Codespace. Run it with `node practice.js`.

**Example 1 — Count from 1 to N:**
```javascript
// practice.js — basic for loop
let n = 5;
for (let i = 1; i <= n; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5 (each on its own line)
```

**Example 2 — Build a string with a loop:**
```javascript
// practice.js — string accumulation
let list = "";
let n = 4;
for (let i = 1; i <= n; i++) {
    if (i > 1) {
        list += ", ";
    }
    list += i;
}
console.log(list);   // "1, 2, 3, 4"
```

**Example 3 — Calculate a running sum:**
```javascript
// practice.js — accumulator pattern
let sum = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
    sum += i;
    console.log("After adding " + i + ": sum = " + sum);
}
// After adding 1: sum = 1
// After adding 2: sum = 3
// After adding 3: sum = 6
// After adding 4: sum = 10
// After adding 5: sum = 15
```

**Example 4 — Combining list and sum:**
```javascript
// practice.js — both outputs together
let n = 3;
let list = "";
let sum = 0;

for (let i = 1; i <= n; i++) {
    if (i > 1) list += ", ";
    list += i;
    sum += i;
}

console.log(list);        // "1, 2, 3"
console.log("Sum: " + sum);  // "Sum: 6"
```

---

## Tips for Success

1. Start by getting the `prompt()` and validation working — test with invalid inputs first
2. Use `parseInt()` to convert the input to a number, then check with `isNaN()`
3. Build your list string and sum in the **same** for loop to keep it simple
4. For the comma-separated list, only add `", "` before a number when `i > 1`
5. Make sure your `alert()` text matches **exactly** — `"Sum: 15"` not `"Sum:15"` or `"sum: 15"`
6. Do not wrap your code in a function — it should run immediately when `script.js` loads

---

## FAQ

**Q: Why can't I use document.getElementById or other DOM APIs?**
This assignment tests pure JavaScript logic without the browser DOM. The autograder runs your code in Node.js, which does not have a DOM. If you use DOM APIs, your code will crash and all tests will fail.

**Q: My code works in the browser but fails the tests.**
Make sure you are not using any DOM APIs. Also check that your alert text matches exactly — `"Sum: 15"` is not the same as `"Sum:15"` (missing space) or `"sum: 15"` (wrong case).

**Q: Can I use two separate for loops (one for the list, one for the sum)?**
Yes, but you only need one. You can build the list string and calculate the sum inside the same loop.

**Q: What about N=1?**
If the user enters `1`, the list should be just `1` (no commas) and the sum should be `Sum: 1`.

**Q: What if the user clicks Cancel on the prompt?**
When the user clicks Cancel, `prompt()` returns `null`. This should be treated as invalid input.

---

View all assignments and scoring breakdowns at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
