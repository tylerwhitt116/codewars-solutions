function solution(number){
  let sum = 0,
      n = number
    for (let i=0; i < n; i++) {
      if((i % 3 == 0) || (i % 5 == 0)){
        sum += i
      }else if(n < 0){return 0}
  }
  return sum  
​
​
  
  }