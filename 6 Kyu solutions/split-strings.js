//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
   let arr = [],
       s = str
   for(let i=0; i < s.length; i+=2){
     arr.push(`${s[i] + (s[i+1] || '_')}`)
   }
   return arr
}
//Outputs:
//'abc' =>  ['ab', 'c_']
//'abcdef' => ['ab', 'cd', 'ef']
