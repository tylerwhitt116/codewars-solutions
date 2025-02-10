function high(x){
 const str = x.split(' ');
  const wordScore = word => [...word].reduce((sum, char) => (sum + char.charCodeAt(0)-96), 0)  
  
  return str.reduce((highest, word) => wordScore(word) > wordScore(highest) ? word : highest) 
}