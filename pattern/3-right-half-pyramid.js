const input = require("../input.js");
const n = Number(input[0]);

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

printTriangle(n);
