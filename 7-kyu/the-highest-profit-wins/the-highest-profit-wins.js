function minMax(arr){
  let hi = Math.max(...arr);
  let lo = Math.min(...arr);
  return [lo, hi];
}