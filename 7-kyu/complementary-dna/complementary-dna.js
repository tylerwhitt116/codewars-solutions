function dnaStrand(dna){
   const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  
  return dna
    .split("") // Split the string into individual characters
    .map(base => complements[base]) // Map each base to its complement
    .join(""); // Join the complementary bases into a string
}