// Q .find the largest number from the array

function largestNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNumber([1, 23, 24, 1, 3, 4]));
