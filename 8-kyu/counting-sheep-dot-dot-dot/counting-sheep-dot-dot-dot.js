function countSheeps(sheep) {
  //returns a new array that filters out the false, null, and undefined values and keeps the values equal to true
 return sheep.filter(Boolean).length
  
}