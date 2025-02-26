function expandedForm(num) {
  return num
  .toString()
  .split('')//split into individual numbers
  .reverse()//reverse the order
  .map((d, i) => d * Math.pow(10, i))//Multiply each digit by index or place value
  .filter((val) => val > 0)//remove zeros
  .reverse()//order of numbers reverts back to original order
  .join(' + ');// Finally joined by the add symbol
}