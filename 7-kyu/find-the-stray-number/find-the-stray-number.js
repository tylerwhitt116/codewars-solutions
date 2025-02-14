function stray(numbers) {
​
  return numbers.reduce((acc, num)=> acc ^ num, 0)
  
​
}