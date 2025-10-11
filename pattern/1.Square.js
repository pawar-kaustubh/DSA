const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]); // Read first line as number

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "* ";
  }
  console.log(row);
}
