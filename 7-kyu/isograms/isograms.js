function isIsogram(str){
  const s = str.toLowerCase();//Set the string to lowercase to ignore casing
  const charSet = new Set();//create a hash table
  return s.split("").every(char=> {if(charSet.has(char)) 
                                   return false;
                                   charSet.add(char);
                                   return true
                                  })
}