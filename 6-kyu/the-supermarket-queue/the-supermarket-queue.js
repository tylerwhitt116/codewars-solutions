function queueTime(customers, n) {
  if( n === 1) return customers.reduce((acc, curr) => acc + curr, 0)
  if(customers.length === 0)return 0;
  
  let tills = Array(n).fill(0);
  //array of tills set to 0 initially 
  
  for(let time of customers) {
    //Assign each customer to the till with the least current load
    let minIndex = tills.indexOf(Math.min(...tills));
    tills[minIndex] += time;
  }
  
  return Math.max(...tills);
}