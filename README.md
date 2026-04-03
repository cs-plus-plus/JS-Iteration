# CS++ JavaScript — Iteration

> **Unit 8.4** | 100 Points | 6 Automated Tests

In this assignment you will use a `while` loop to validate input and a `for` loop to list numbers and calculate a sum. Your code runs immediately when the page loads — no buttons, no DOM manipulation. Just `prompt()` for input and `alert()` for output.

---

## Table of Contents

1. [For Loops](#for-loops)
2. [While Loops](#while-loops)
3. [Building a String with a Loop](#building-a-string-with-a-loop)
4. [Accumulating a Sum](#accumulating-a-sum)
5. [parseInt() and isNaN()](#parseint-and-isnan)
6. [Assignment](#assignment)
7. [Scoring Rubric](#scoring-rubric)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

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

Use a `for` loop when you **know how many times** the loop should run.

---

## While Loops

A `while` loop repeats a block of code **as long as a condition is true**:

```javascript
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
// Output: 0, 1, 2
```

The loop checks the condition **before** each iteration. If the condition is false from the start, the body never executes.

Use a `while` loop when you **don't know in advance** how many times the loop will run — for example, when repeatedly asking for valid input.

### Input Validation with a While Loop

A common pattern is to keep prompting the user until they enter valid data:

```javascript
let input = prompt("Enter a positive number:");
let num = parseInt(input);

while (isNaN(num) || num <= 0) {
    alert("Invalid input");
    input = prompt("Enter a positive number:");
    num = parseInt(input);
}

// At this point, num is guaranteed to be a valid positive number
alert("You entered: " + num);
```

This is better than an `if` statement because it **keeps asking** instead of just stopping. The user gets another chance to enter valid data.

### For vs While — When to Use Each

| Use a `for` loop when... | Use a `while` loop when... |
|--------------------------|---------------------------|
| You know the number of iterations | You don't know how many iterations |
| Counting from A to B | Waiting for a condition to change |
| Looping through an array | Validating user input |
| Building a string of N items | Repeating until correct |

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
Call `prompt()` with the text: `Enter a positive number:`

### Validation with a While Loop — 20 points
Use a **`while` loop** to repeatedly check the input. If the input is invalid, alert exactly `Invalid input` and prompt again. Invalid inputs include:
- Empty string or whitespace
- Not a number (letters, symbols)
- Zero or a negative number
- User clicks Cancel (`null`)

The loop should keep asking until the user enters a valid positive number.

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
- **Uses a `while` loop** — static analysis checks your source code (10 points)
- **Uses a `for` loop** — static analysis checks your source code (10 points)

### Rules
- Use a **`while` loop** for input validation — keep prompting until valid
- Use a **`for` loop** for the number list and sum — do not hard-code the answer
- Do NOT use any DOM APIs (`document.getElementById`, `innerHTML`, etc.)
- Do NOT export functions or use `module.exports`
- Your code runs immediately at the top level of `script.js` — no function wrappers needed

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | Invalid input | 20 | `abc`, `""`, `" "`, `-1`, `0`, `null` → alert `Invalid input` then re-prompt |
| 2 | Uses a while loop | 10 | Static analysis of script.js |
| 3 | Uses a for loop | 10 | Static analysis of script.js |
| 4 | Number list for N=5 | 20 | Alerts exactly `1, 2, 3, 4, 5` |
| 5 | Sum for N=5 | 20 | Alerts exactly `Sum: 15` |
| 6 | Works for N=3 | 20 | Alerts `1, 2, 3` then `Sum: 6` |
| | **Total** | **100** | |

---

## Tips for Success

1. **Start with the while loop** — get the `prompt()` and validation loop working first
2. **Use `parseInt()`** to convert the input to a number, then check with `isNaN()`
3. **Inside the while loop**, alert "Invalid input" and then call `prompt()` again
4. **After the while loop**, you know the input is valid — build the list and sum with a `for` loop
5. **Build your list string and sum in the same for loop** to keep it simple
6. **Think about the comma placement** — you need `", "` between numbers but not before the first one
7. **Match the exact format** — `"Sum: 15"` not `"Sum:15"` or `"sum: 15"`
8. **Do not wrap your code in a function** — it should run immediately when `script.js` loads

---

## FAQ

**Q: Why can't I use document.getElementById or other DOM APIs?**
This assignment tests pure JavaScript logic without the browser DOM. The autograder runs your code in Node.js, which does not have a DOM. If you use DOM APIs, your code will crash and all tests will fail.

**Q: My code works in the browser but fails the tests.**
Make sure you are not using any DOM APIs. Also check that your alert text matches exactly — `"Sum: 15"` is not the same as `"Sum:15"` (missing space) or `"sum: 15"` (wrong case).

**Q: What's the difference between the while loop and the for loop in this assignment?**
The `while` loop handles input validation — it keeps asking the user for input until they give a valid positive number. The `for` loop handles the counting — once you have a valid number N, it counts from 1 to N to build the list and calculate the sum.

**Q: Can I use two separate for loops (one for the list, one for the sum)?**
Yes, but you only need one. You can build the list string and calculate the sum inside the same loop.

**Q: What about N=1?**
If the user enters `1`, the list should be just `1` (no commas) and the sum should be `Sum: 1`.

**Q: What if the user clicks Cancel on the prompt?**
When the user clicks Cancel, `prompt()` returns `null`. This should be treated as invalid input — alert "Invalid input" and prompt again.

---

View all assignments at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
