function SeriesSum(n) {
if(n === 0) return "0.00";
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}
​
​
​
//Rules:
//Round to 2 decimal places (toFixed(2))
//Return as a string
//if the result is 0 return "0.00"
//only natural numbers