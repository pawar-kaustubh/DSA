// Brute force solution

/* function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "No solution found";
}
console.log(twoSumBrute([2,7,11,15], 10)); // [0,1]
console.log(twoSumBrute([3,2,4], 6));     // [1,2] */

// Using  Hash map solution

function twoSum(nums, target) {
  //value -> index
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    // store current value-> index for future complements
    map.set(nums[i], i);
  }
  return 'No solution found!'
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([2,7,11,15], 18)); // [1,2]

