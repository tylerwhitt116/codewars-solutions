function findAverage(array) {
  // your code here
  return (array.length === 0 ) ? 0 : array.reduce((a,b)=>a+b,0)/array.length;
}