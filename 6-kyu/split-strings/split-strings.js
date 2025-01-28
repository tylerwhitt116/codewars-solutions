function solution(str){
   let arr = [],
       s = str
   for(let i=0; i < s.length; i+=2){
     
     arr.push(`${s[i] + (s[i+1] || '_')}`)
     
     
     
   }
   return arr
}