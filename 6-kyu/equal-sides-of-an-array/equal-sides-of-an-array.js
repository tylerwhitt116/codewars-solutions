function findEvenIndex(arr)
{
  let arrSum = arr.reduce((sum, num) => sum+num)//find the total sum of the array
  let leftArr = 0//left sum of the array
  
  for(let i = 0; i < arr.length; i++){
    arrSum -= arr[i] //start subtracting the current index number(and continue) from the total sum to find the right sum of the array
    
    if(leftArr === arrSum) return i;//if the right sum is equal to the left sum, return the index where they have the same values
    
    leftArr += arr[i]//while subtracting from the right side of the array, youre adding to the left side
  }
  return -1//if there isn't an index where there are equal values on both sides then return -1
  //Code goes here!
}