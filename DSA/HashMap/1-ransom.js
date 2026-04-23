
let ransomeNote = "aa";
let magazine = "ab";

function canConstruct(ransomeNote, magazine) {
  const freq = new Map();
  for (let ch of magazine) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  for (let ch of ransomeNote) {
    if (!freq.has(ch)) return false;
    if (freq.get(ch) === 0) return false;

    freq.set(ch, freq.get(ch) - 1);
  }
  return true;
}

console.log(canConstruct(ransomeNote, magazine));
