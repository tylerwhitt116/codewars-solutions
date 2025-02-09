function findUniq(arr) {
 const count = new Map();//create a hash
  //count the occurences for each number in the array
  for(let num of arr ){
    count.set(num, (count.get(num)|| 0) + 1)
  }
  //return the number that has only one occurence
 return [...count.keys()].find(key => count.get(key) === 1)
 }
​