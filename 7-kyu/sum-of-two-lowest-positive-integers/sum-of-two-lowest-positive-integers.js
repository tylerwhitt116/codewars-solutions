function sumTwoSmallestNumbers(numbers) {  
  const newArr = numbers.sort((a,b)=> a-b)
  return newArr[0] + newArr[1];  
}
​