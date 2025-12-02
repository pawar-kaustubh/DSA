function largestNumber(arr) {
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      {
        num = arr[i];
      }
    }
  }
  return num;
}

console.log(largestNumber([1, 23, 24, 1, 3, 4]));
