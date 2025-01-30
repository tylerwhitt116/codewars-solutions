function primeString(s) {
  const len = s.length
  
   // Iterate through possible substring lengths up to half of the string length
  for(let i = 1; i <= Math.floor(len/2); i++){
    if(len % i === 0){  // Check if the string length is divisible by i
      let substring = s.slice(0, i)// Extract the first 'i' characters as a potential repeating pattern
      
      if(substring.repeat(len/i)===s){// Repeat the substring enough times to match the original string length
        return false;// return false if the there are repeating characters
      }
    }
    
  }
return true; //If there aren't any repeating characters, the string is prime.  
}
​