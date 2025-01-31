function twoSum(numbers, target) {
    const numMap = new Map(); //creates a hash map
  
  for(let i = 0; i < numbers.length; i++){
    const complement = target - numbers[i];
    //go through the array subtracting the target from each number to get the complement
    
    if(numMap.has(complement)) {
      return [numMap.get(complement), i]; //if there is a complement, 
      //which is the difference of the target and current num, return the indices of the two numbers
    }
    
    numMap.set(numbers[i], i);// set the current number and its index
    //within the hash map.
  }
  
  
  
  return [];
}