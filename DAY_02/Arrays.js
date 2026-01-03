// Arrays examples and common operations
// Demonstrates creation, access, iteration, mutation, copying, and slicing

const fruits = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('--- Original array ---');
console.log(fruits);

console.log('\n--- Access elements ---');
console.log('fruits[0] =>', fruits[0]);
console.log('fruits[1] =>', fruits[1]);
console.log('fruits[2] =>', fruits[2]);

console.log('\n--- Iterate (classic for) ---');
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

console.log('\n--- Iterate (for..of) ---');
for (let fruit of fruits) {
  console.log(fruit);
}

console.log('\n--- Type checks ---');
console.log('typeof fruits =>', typeof fruits); // 'object'
console.log('Array.isArray(fruits) =>', Array.isArray(fruits));

console.log('\n--- Print in reverse (non-mutating) ---');
console.log([...fruits].reverse());

console.log('\n--- Print in reverse (manual) ---');
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

console.log('\n--- Push / Pop (mutating) ---');
// Use push to add and pop to remove from the end
fruits.push(9);
console.log('after push(9):', fruits);
const popped = fruits.pop();
console.log('popped:', popped);
console.log('after pop():', fruits);

console.log('\n--- Insert (splice) ---');
// Insert at index 2 without deleting: splice(start, deleteCount, ...items)
fruits.splice(2, 0, 99);
console.log('after splice(2,0,99):', fruits);

console.log('\n--- Replace by index ---');
// Direct assignment replaces value at index
fruits[2] = 42;
console.log('after fruits[2] = 42:', fruits);

console.log('\n--- Map (create new array) ---');
const tripled = fruits.map((n) => n * 3);
console.log('tripled:', tripled);

console.log('\n--- Slice (copy portion) ---');
console.log('fruits.slice(2,5):', fruits.slice(2, 5));
console.log('fruits.slice(-1):', fruits.slice(-1));

console.log('\n--- Notes ---');
console.log('- Use const for arrays you do not reassign (mutation allowed).');
console.log('- Use non-mutating methods (slice, map, concat) when you need originals unchanged.');
