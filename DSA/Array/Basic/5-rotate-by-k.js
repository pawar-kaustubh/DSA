/* function rotate(arr, k) {
  if (arr.length <= 1) {
    console.log(arr);
  }
  k = k % arr.length;

  for (let r = 0; r < k; r++) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
  }
  return arr;
}

console.log(rotate([2, 4, 6, 7, 8], 3));


 */

// Rotate the array by swapping using two pointer method

function rotateLeft(arr, k) {
  if (arr.length <= 1) return arr;

  k = k % arr.length;
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr
}


console.log(rotateLeft([8,-4,2,1,6], 2));