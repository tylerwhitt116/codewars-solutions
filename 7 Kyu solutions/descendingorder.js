



//Descending Order



/**Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145, Output: 54421

Input: 145263, Output: 654321

Input: 123456789, Output: 987654321 */


function descendingOrder(n){
  let res = '',
   arr = [],
   nStr = String(n)
  
  for (let i = 0; i < nStr.length; i++){
    arr.push(nStr[i]);
  }
  for (let i = 0; i < arr.length - 1; i++){
    
    for(let j = i + 1; j < arr.length;j++){
      
      if(Number(arr[i]) < Number(arr[j])){
        
       [ arr[i], arr[j]]=[ arr[j], arr[i]];
      }
       }
  }
  for(let i = 0; i < arr.length; i++){
    res += arr[i]
  }
  return Number(res)
  }
