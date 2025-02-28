var countSheep = function (num){
  return [...Array(num)]
          .map((_, i)=> `${i + 1} sheep...`)
          .join('')
}