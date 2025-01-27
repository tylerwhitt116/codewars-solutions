function highAndLow(numbers){
const numArray = numbers.split(" ").map(Number); // Split the string into an array and convert to numbers
  const highest = Math.max(...numArray); // Find the highest number
  const lowest = Math.min(...numArray);  // Find the lowest number
  return `${highest} ${lowest}`; // Return as a space-separated string
​
}