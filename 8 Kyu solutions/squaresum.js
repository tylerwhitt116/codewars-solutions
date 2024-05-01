


// Square(n) Sum



/** Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

 */




function squareSum(numbers){
  const powNum = numbers.map((num) =>{return Math.pow(num,2)})
 return powNum.reduce((acc,c) => acc + c,0)
}