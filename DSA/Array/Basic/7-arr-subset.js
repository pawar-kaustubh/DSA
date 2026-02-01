// check whether the second array is the subset of first

// With brute force
function isSubset1(a, b) {
  for (let i = 0; i < b.length; i++) {
    let found = false;
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i]) {
        found = true;
        a[j] = -1;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}
let a = [2, 3, 3, 3, 4, 5, 6, 7, 8];
let b = [2, 3, 3, 4, 5];
console.log(isSubset1(a, b));

//  Using the Hashmap 
/* 
function isSubset(a, b) {
  let freq = {};

  for (let num of a) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of b) {
    if (!freq[num]) {
      return false;
    }
    freq[num]--;
  }

  return true;
}

let a = [2, 3, 3, 3, 4, 5, 6, 7, 8];
let b = [2, 3, 3, 4, 5];

console.log(isSubset(a, b)); // false
 */
