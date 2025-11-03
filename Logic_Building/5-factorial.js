const input = require("fs").readFileSync(0, "utf-8").trim().split("/n");

let num = Number(input[0]);
/* 
function factOfNum(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
} */

// console.log(factOfNum(num));

// Using recusion mathod

function factOfNumRecursive(num) {
  if (num < 0) return "Invalid input";
  if (num === 0 || num === 1) return 1;
  return num * factOfNumRecursive(num - 1);
}

console.log(factOfNumRecursive(num));
