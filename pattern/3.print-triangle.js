const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

function printTriangle(n) {
  for (let i = 1; i <=n; i++) {
    let pattern = "";
    for (let j = 1; j <=i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}
const n = Number(input[0]);
printTriangle(n);
