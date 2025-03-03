const getSum = (a, b) => {
  if(a === b) return a;
  
  let max = Math.max(a,b);
  let min = Math.min(a,b);
  
  return ((max - min + 1) * (min + max))/2;
} 