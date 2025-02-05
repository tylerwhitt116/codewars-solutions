function squareDigits(num){
  return Number(num
  .toString()
  .split('')
  .map(char => Math.pow(char, 2))
  .join(''));
  
};