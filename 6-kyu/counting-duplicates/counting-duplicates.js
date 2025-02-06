function duplicateCount(text){
  let newArr = new Map()
  let t = text.toLowerCase()
  
  for (let char of t){
    newArr.set(char , (newArr.get(char) || 0) + 1)
  }
          
  return [...newArr.values()].filter(count => count > 1).length
}