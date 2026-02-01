
function invertRight(n) {
  for (let i = n; i >=1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
invertRight(5);

/* const input = require("../input.js");
const n = Number(input[0]);

function invertRightTri(n) {
  for (let i = n; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += " *";
    }
    console.log(pattern);
  }
}
invertRightTri(n);
 */
