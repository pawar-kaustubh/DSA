// Write a program to swap a numbers
// 1. By using third variable.

let a = 10,
  b = 20,
  c;
console.log(`Number before swapping a = ${a} & b = ${b}`);

c = a;
a = b;
b = c;
console.log(`Number after swapping a = ${a} & b = ${b}`);

// 2. Without using the third variable
console.log("Without the using third variable");

let x = 5,
  y = 6;
console.log(`Number before swapping x = ${x} & y = ${y}`);

x = x + y; // 11
y = x - y; // 11 - 6 = 5
x = x - y; // 11 - 5 = 6
console.log(`Number after swapping x = ${x} & y = ${y}`);


// 3rd method 

let p=4 ,q =1
console.log(`Number after swapping p = ${p} & q = ${q}`);

[p,q] = [q,p]

console.log(`Number after swapping p = ${p} & q = ${q}`);
