function sumTwoSmallestNumbers(numbers) {  
  let twoLowest = numbers.sort((a,b)=>a-b).splice(0,2)
  return twoLowest.reduce((a,b) => a+b)
}