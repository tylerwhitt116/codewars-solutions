//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validSmileys = /^[:;][-~]?[)D]$/ //a regex for the [eyes], [nose]?, and [mouth]. 
  return arr.filter(face => validSmileys.test(face)).length// filter out valid faces from invalid, count and return the number of valid smileys in the array. 
}