function duplicateEncode(word){
    const lowerCaseWord = word.toLowerCase(); // Ignore capitalization
  const charCounts = {}; // Object to count character occurrences
​
  // Count occurrences of each character
  for (const char of lowerCaseWord) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
​
  // Build the resulting string based on character counts
  return [...lowerCaseWord]
    .map(char => (charCounts[char] > 1 ? ")" : "("))
    .join("");
}
​