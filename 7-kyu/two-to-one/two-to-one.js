function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}       //creates a new merged array without duplicates that is sorted alphebetically and then joined