function oddOrEven(array) {
  
  if(array.length < 1){
    return 'even'
  }
  const sum = array.reduce((a,b)=>a + b)
 
  if(sum % 2 == 0){
    return 'even'
  }else{
    return 'odd'
  }
  
}