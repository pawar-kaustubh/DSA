// Using for loop
let arr = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);

// With using built in function

let arr2 = [1, 2, 3, 4];
console.log(arr2.reduce((sum, val) => sum + val, 0));
