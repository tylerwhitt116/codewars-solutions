function findSmallestInt(arr) {
  return parseInt(arr.sort((a,b) => a-b).splice(0,1))
}