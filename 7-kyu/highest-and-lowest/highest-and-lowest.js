function highAndLow(numbers){
let numArray = numbers.split(" ").map(Number);
  let max = Math.max(...numArray);
  let min = Math.min(...numArray);
  return `${max} ${min}`;
}