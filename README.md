# CS++ JavaScript — Iteration

> **Unit 8.4** | 100 Points | 5 Automated Tests

In this assignment you will use `for` loops to list numbers and calculate a sum. Your code runs immediately when the page loads — no buttons, no DOM manipulation. Just `prompt()` for input and `alert()` for output.

---

## Table of Contents

1. [For Loops](#for-loops)
2. [Building a String with a Loop](#building-a-string-with-a-loop)
3. [Accumulating a Sum](#accumulating-a-sum)
4. [parseInt() and isNaN()](#parseint-and-isnan)
5. [Assignment](#assignment)
6. [Scoring Rubric](#scoring-rubric)
7. [Tips for Success](#tips-for-success)
8. [FAQ](#faq)

---

## For Loops

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

---

## Building a String with a Loop

You can use a loop to build up a string one piece at a time:

```javascript
let result = "";
for (let i = 1; i <= 3; i++) {
    result = result + i;
}
console.log(result);   // "123"
```

To put separators between items (but not after the last one), check whether you are past the first item before adding the separator.

---

## Accumulating a Sum

Use a variable to keep a running total:

```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);   // 15  (1 + 2 + 3 + 4 + 5)
```

This is called the **accumulator pattern** — start at zero and add to the total on each pass through the loop.

---

## parseInt() and isNaN()

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

## Assignment

Write your code at the top level of `script.js`. It should run immediately when the file loads — do **not** wrap it in a function. Follow the STEP comments in `script.js`.

### Input
Call `prompt()` **exactly once** with the text: `Enter a positive number:`

### Validation — 20 points
If the input is any of the following, alert exactly `Invalid input`:
- Empty string or whitespace
- Not a number (letters, symbols)
- Zero or a negative number
- User clicks Cancel (`null`)

### Number List — 20 points
Use a `for` loop to build a comma-separated list of numbers from 1 to N and display it with `alert()`.

| Input | Alert Text (exact) |
|-------|-------------------|
| `5` | `1, 2, 3, 4, 5` |
| `3` | `1, 2, 3` |
| `1` | `1` |

### Sum — 20 points
Calculate the sum of all numbers from 1 to N and display it with `alert()` in the exact format `Sum: X`.

| Input | Alert Text (exact) |
|-------|-------------------|
| `5` | `Sum: 15` |
| `3` | `Sum: 6` |
| `1` | `Sum: 1` |

### Code Quality — 20 points
The autograder also checks your code:
- **Uses a `for` loop** — static analysis checks your source code (20 points)

### Rules
- Call `prompt()` exactly **once**
- Use a **`for` loop** — do not hard-code the answer
- Do NOT use any DOM APIs (`document.getElementById`, `innerHTML`, etc.)
- Do NOT export functions or use `module.exports`
- Your code runs immediately at the top level of `script.js` — no function wrappers needed

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | Invalid input | 20 | `abc`, `""`, `" "`, `-1`, `0`, `null` → alert `Invalid input` |
| 2 | Uses a for loop | 20 | Static analysis of script.js |
| 3 | Number list for N=5 | 20 | Alerts exactly `1, 2, 3, 4, 5` |
| 4 | Sum for N=5 | 20 | Alerts exactly `Sum: 15` |
| 5 | Works for N=3 | 20 | Alerts `1, 2, 3` then `Sum: 6` |
| | **Total** | **100** | |

---

## Tips for Success

1. **Start with validation** — get the `prompt()` and invalid-input check working first
2. **Use `parseInt()`** to convert the input to a number, then check with `isNaN()`
3. **Build your list string and sum in the same for loop** to keep it simple
4. **Think about the comma placement** — you need `", "` between numbers but not before the first one
5. **Match the exact format** — `"Sum: 15"` not `"Sum:15"` or `"sum: 15"`
6. **Do not wrap your code in a function** — it should run immediately when `script.js` loads

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

View all assignments at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
