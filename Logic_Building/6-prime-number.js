// Read input from terminal (Node.js standard input)
const input = require("fs").readFileSync(0, "utf-8").trim();

// Convert input string to number
let num = Number(input);

function isPrime(num) {
  // Numbers less than or equal to 1 are NOT prime
  // (because prime numbers must be greater than 1)
  if (num <= 1) return false;

  // 2 is the only even prime number
  if (num === 2) return true;

  // If the number is even and greater than 2,
  // it cannot be prime
  if (num % 2 === 0) return false;

  /*
    We check divisibility only up to √num.

    Reason:
    If num = a × b, then at least one of a or b
    must be ≤ √num.

    So if no number ≤ √num divides num,
    then num is prime.
  */

  // Start checking from 3 (first odd number)
  // Skip even numbers by increasing i by 2
  for (let i = 3; i * i <= num; i += 2) {

    // If num is divisible by i,
    // then num has a factor other than 1 and itself
    if (num % i === 0) {
      return false; // Not a prime number
    }
  }

  // If no divisors were found, the number is prime
  return true;
}

// Print true if prime, false otherwise
console.log(isPrime(num));

/* to run the code write in the terminal
    echo "num" | node file.js
*/
