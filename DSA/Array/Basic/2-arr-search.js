// Find the number in array and return its index
function arrSearch(arr, x) {
  // convert  x to number
  x = Number(x);

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1; // return -1 if x is not found
}

console.log(arrSearch([2, 3, 5, 7, 8], 5));
console.log(arrSearch([2, 3, 5, 7, 8], 6));
