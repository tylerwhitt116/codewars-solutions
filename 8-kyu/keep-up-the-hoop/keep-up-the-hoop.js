//n = 10 or higher -> Good job or whatever
// n < 10 -> Keep trying
​
function hoopCount (n) {
   if(n >= 10){
     return 'Great, now move on to tricks';
   }else{
     return 'Keep at it until you get it';
   }
}