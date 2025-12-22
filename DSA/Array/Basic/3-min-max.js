// Find the min and max number in array

function getMinMax(arr) {
  // this return the first number as min and max
  let min = arr[0];
  let max = arr[0];

  // Loop through the array from second number
  for (let i = 1; i < arr.length; i++) {
    // if number is greater than max , update max
    if (arr[i] > max) {
      max = arr[i];
    }

    // if number is smaller than min , update min
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return [min, max]; // return min and max
}

console.log(getMinMax([2, -1, 1, 6, 6]));
console.log(getMinMax([1, 4, 3, -5, -4, 8, 6]));
console.log(getMinMax([1]));
