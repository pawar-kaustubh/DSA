function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let first = strs[0];

  for (let i = 0; i < first.length; i++) {

    let char = first[i];       // 🔴 BREAKPOINT 1 (See which char we are checking)

    for (let j = 1; j < strs.length; j++) {

      // 🔴 BREAKPOINT 2 (Check comparison with each string)
      // Inspect: i, j, char, strs[j][i]

      if (i >= strs[j].length || strs[j][i] !== char) {
        // 🔴 BREAKPOINT 3 (Mismatch detected)
        // Inspect: i, char, strs[j][i], returning prefix
        return first.slice(0, i);
      }
    }
  }

  // 🔴 BREAKPOINT 4 (No mismatch → whole first is prefix)
  return first;
}
console.log(longestCommonPrefix(["flower","flow"]))