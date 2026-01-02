# Time Complexity


## Overview

Time complexity describes how the runtime of an algorithm grows with input size (n). We use Big-O notation to express the upper bound of growth.

## Examples

### Constant Time — O(1) ⚡

No loops or recursion; execution time does not depend on `n`.

```javascript
let x = 5;
console.log(x);

if (x === 5) {
  console.log("hello");
}
```

### Linear Time — O(n) 🔁

A single loop that scales with `n`.

```javascript
let n = 5;
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

### Quadratic Time — O(n^2) ⚠️

Nested loops where one loop runs inside another.

```javascript
const n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log("hello");
  }
}
```

### Cubic Time — O(n^3) 🧱

Three nested loops.

```javascript
const n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      console.log(i);
    }
  }
}
```

### Logarithmic Time — O(log n) 📉

Typically occurs when the problem size is repeatedly divided, e.g., by 2 each iteration.

```javascript
let b = 16;
while (b >= 1) {
  console.log("hello");
  b = b / 2;
}
```

## Notes & Tips 🔧

- Independent consecutive loops add: O(n) + O(n) = O(n).
- Nested loops multiply: O(n) \* O(n) = O(n^2).
- Logarithmic growth happens when the input is halved/doubled repeatedly.

## Growth Order (common)

O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n)

---

File: `DAY_01/time_complexity.js` — examples adapted for clarity.
