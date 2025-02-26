var summation = function (num) {
  //find the sum of numbers up to num + num
  //create an empty sum variable to add instances into
  let sum = 0;
  //create a for loop that iterates through previous numbers smaller or equal to num
  for(let i = 1; i <= num; i++){
    //Each iteration is added into the sum variable.
    sum += i;
  }
  return sum;
}