function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  //set an array of vowels
  let count = 0;
  //initialize a count variable
  for(let i = 0; i < str.length; i++){
    //have one for loop iterating through the string
    for(let j = 0; j < vowels.length; j++){
      //have another for loop iterating through the array of vowels
      if(str[i] === vowels[j]){
        //if there's a vowel in the string
        count++;
        //add a count to the count variable
      }
    }
  }
  return count;
  //return the total count of vowels in the string.
​
}