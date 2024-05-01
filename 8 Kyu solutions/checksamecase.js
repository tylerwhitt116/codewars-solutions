



//Check Same Case


/** Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0 
 */

function sameCase(a, b){
  //take a whole string of every letter
  const alpha = `abcdefghijklmnopqrstuvwxyz`
  //if a or b is not a letter then return -1
  if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
  //create a function that checks both letters
  function caseCheck(x){
    //if the letter is a lowercase letter, return lower
    if(x === x.toLowerCase()) return 'lower'
    //if the letter is uppercase, return upper
    if(x === x.toUpperCase()) return 'upper'
  }
  //take the previous function and call it to check if either the instances are both upper or lower case(return 1), 
  //or if one is a different case from the other(return 0)
  return caseCheck(a) === caseCheck(b) ? 1:0
}


