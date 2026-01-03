# DAY_02 — Arrays

This folder demonstrates basic JavaScript array operations and patterns using `Arrays.js`.

**What's included**
- Creation and initialization of arrays
- Accessing elements
- Iteration (`for`, `for..of`)
- Type checks (`typeof`, `Array.isArray`)
- Reversing (non-mutating and manual)
- Mutating operations: `push`, `pop`, `splice`, direct index assignment
- Non-mutating operations: `map`, `slice`

**How to run**

Open a terminal in this folder and run:

```bash
node Arrays.js
```

You will see labeled console output demonstrating each operation.

**Examples shown in `Arrays.js`**
- Access: `fruits[0]`
- Iterate: classic `for` and `for..of`
- Reverse (non-mutating): `[...] .reverse()`
- Push/pop: `fruits.push(9)` and `fruits.pop()`
- Insert: `fruits.splice(2, 0, 99)`
- Map: `fruits.map(n => n * 3)`
- Slice examples: `slice(2,5)`, `slice(-1)`

**Notes & recommendations**
- Prefer `const` for arrays that are not reassigned; mutation of contents is still allowed.
- Use non-mutating methods (`slice`, `map`, `concat`) when you need to preserve the original array.

**Time & Space complexity (common ops)**
- Access by index: O(1) time, O(1) space
- Iteration: O(n) time, O(1) extra space
- push/pop (end): O(1) amortized time
- splice (insert/delete middle): O(n) time
- map/slice/reverse (copying operations): O(n) time, O(n) extra space


