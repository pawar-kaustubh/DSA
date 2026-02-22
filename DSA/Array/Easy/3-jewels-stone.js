// Find duplicates in string 
// Using Hash Set Method

function jewelsInStone(jewels, stones) {
  const jewelsSet = new Set(jewels);
  let count = 0;

  for (let stone of stones) {
    if (jewelsSet.has(stone)) {
      count++;
    }
  }
  return count;
}

console.log(jewelsInStone("aAA", "aAAbbbb"));
