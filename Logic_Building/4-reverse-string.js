// Write the function that returns the reverse string.
const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

const str = String(input[0]);

/* function reverseString(str) {
  return str.split("").reverse().join("");
} */

// Using for loop
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
console.log(reverseString(str));
