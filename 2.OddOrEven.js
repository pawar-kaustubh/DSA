function OddOrEven(number) {
  return number % 2 === 0
    ? `Number ${number} is an Even number`
    : `Number ${number} is an Odd number`;
}

console.log(OddOrEven(5));
console.log(OddOrEven(10));
console.log(OddOrEven(0));
