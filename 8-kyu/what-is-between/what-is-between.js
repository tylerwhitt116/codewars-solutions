function between(a, b) {
  return Array
    .from({length: b - a + 1},//creates an array that ends at the highest number, starts at the lowest number
          //and adds empty spaces by incrementing by one from the start.
          (_, i) => a + i);//fills the empty spaces with incremented numbers
}