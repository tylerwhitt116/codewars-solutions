function fizzbuzzPlusPlus(numbers, words) {
  const lcm = numbers.reduce(( a , b )=> a * b, 1 );
  return Array.from({length: lcm}, ( _, i ) => {
    let num = i + 1;
    let res = numbers.map((x,index)=>(num % x === 0)? words[index]: '').join('');
    return res || num;
  })
}