// Using XOR method
let arr = [6, 2, 5, 2, 2, 6, 6];
let k = 3;
function findUnique(arr, k) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    let sum = 0;

    for (let num of arr) {
      if ((num >>> i) & 1) {
        sum++;
      }
    }
    if (sum % k !== 0) {
      result |= 1 << i;
    }
  }
  return result;
}

console.log(findUnique(arr, k));
