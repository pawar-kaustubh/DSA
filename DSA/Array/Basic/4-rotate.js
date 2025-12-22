// Rotate the array by one in clockwise direction
/*    example input= [2,4,6,7,8]
            output= [8,2,4,6,7] */

//  Whithout using the array method

/* function rotateArr(arr) {
  // Remove the last number
  let lastNum = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
  // shift the elements to right to left to avoid overwriting
    arr[i] = arr[i - 1];
  }
  arr[0] = lastNum;
  console.log(arr);
}

rotateArr([2, 4, 6, 7, 8]); */

/* // Using Array methods
let lastNum = arr.pop();
function rotateArr2(arr) {
  arr.unshift(lastNum);
  console.log(arr);
}

rotateArr2([2, 4, 6, 7, 8]); */

// Q. 2 Rotate the array anti clockwise direction using array methods
// [2,4,6,7,8] → [4,6,7,8,2]

/* function rotateArr3(arr) {
  // Remove the first element in the array
  let first = arr.shift();
  arr.push(first);
  console.log(arr);
}
rotateArr3([2, 4, 6, 7, 8]); */

// without using array methods

function rotateArr4(arr) {
  let first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = first;
  console.log(arr);
}
rotateArr4([2, 4, 6, 7, 8]);
