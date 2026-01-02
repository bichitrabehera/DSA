/* 1 - constant time
no for loop , no while loop or no recusrison then it is said to run in constant time
*/

let x = 5;
console.log(x);

if (x === 5) {
  console.log("hello");
} else {
  print("welcome");
}
// O(1)

/*
Linear time : if the program is a linear equation
*/

let y = 5;
console.log(y);
for (let i = 0; i < y; i++) {
  console.log(i);
}
// O(n)

y = 5;
console.log(y);
for (let i = 0; i < y; i++) {
  console.log(i);
}
for (let j = 0; j < y; j++) {
  console.log(j);
}

// here above 2 loop are independent so the TC - O(n)

/*
quadratic time :
2n^2+3n+5 = o(n^2)
*/

const n = 5;
const m = 10;
console.log(n + m);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log("hello");
  }
}

// here the inner loop is dependent on the outer loop
// n * n = O(n^2)

/*
cubic time :
*/

const n = 5;
const m = 10;
console.log(n + m);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let k = 0; k < n; k++) {
      console.log(i);
    }
  }
}

// n * n * n = O(n^3)

/*
logarithm time :
*/

let b = 10;
while (b >= 1) {
  console.log(`hello`);
  b = b / 2;
}

// it will run k times
// O(k) = O(log n)
// divide by 2 , 4 or anything then it is log n

let b = 10;
while (b <= 10) {
  console.log(`hello`);
  b = b * 2;
}

// multiple by 2 , 4 or anything then it is log n , n = 2,4,.....

// question

let n = 10;
console.log(n);
// O(1)

for (let i = 0; i < n; i++) {
  console.log(`hello`);
}
// O(n)

for (let j = 0; j < n; j++) {
  for (let k = 0; k < n; k++) {
    console.log(`chaicode`);
  }
}
// O(n^2)

while (n >= 1) {
  console.log(`hitesh`);
  n = n / 2;
}

// O(log n)

// O(1) < O(log n) < O(n) < O(n^2)
// so time complexity is O(n^2)
