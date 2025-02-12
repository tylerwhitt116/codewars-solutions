function firstNonConsecutive (arr) {
  
  for(i=1;i< arr.length;i++){//when comparing current values to previous, we start at the second number, or index 1.
    
    if(arr[i] !== arr[i-1] + 1){//If the current number isn't consecutive to the previous number
      return arr[i]//return the current number
    }
  }
    return null;//If the whole array is consecutive then return null
}