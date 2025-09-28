// find the number is Even or Odd
function EvenOrOdd(number) {
  if (number < 0) {
    throw new Error("Number should be greater than 0.");
  }
  return number % 2 === 0
    ? ` ${number} is Even number`
    : ` ${number} is Odd number`;
}

// console.log(EvenOrOdd(-12));
console.log(EvenOrOdd(3));
console.log(EvenOrOdd(47));
console.log(EvenOrOdd(30));
