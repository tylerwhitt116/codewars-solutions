function sortArray(array) {
  
  //taking the odd numbers and putting them in ascending order
  const oddNum = array.filter(num => num % 2 !== 0).sort((a,b) => a-b)
  //returning the array with the odd numbers in ascending order and leaving even numbers as is.
  return array.map(num => num % 2 !== 0 ? oddNum.shift(): num)
}