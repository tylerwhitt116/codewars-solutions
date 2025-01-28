function countPositivesSumNegatives(input) {
 if(!input || input.length === 0)
   return [];
  let pos = 0;
  let neg = 0;
  for(const num of input){
    if(num > 0){
      pos++
    }else if(num < 0){
      neg += num
    }
  }
  return [pos, neg]
  
}