var number=function(array){
  if(array === [])
    return [];
  return array.map((num, i) => `${i + 1}: ${num}`)
}