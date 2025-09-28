function areaOfRectangle1(l, b) {
  if (l <= 0 || b <= 0) {
    throw new RangeError("Length and Width must be a positive number");
  }
  console.log("Area of the rectangle is ", l * b);
}

areaOfRectangle1(5, 6);
/*

User input method 
To run this below code write in the terminal 

echo "length width" | node filename.js
echo "3 5" | node filename.js


const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

function areaOfRectangle(length, width) {
  if (length <= 0 || width <= 0) {
    throw new RangeError("Length and Width must be positive values!");
  }
  return length * width;
}

let [length, width] = input[0].split(" ").map(Number);
console.log("Area of the rectangle is", areaOfRectangle(length, width));

*/