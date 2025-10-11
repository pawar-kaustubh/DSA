const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

function printRectangle(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let pattern = "";
    for (let j = 0; j < cols; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

const [rows, cols] = input[0].split(" ").map(Number);
printRectangle(rows, cols);
