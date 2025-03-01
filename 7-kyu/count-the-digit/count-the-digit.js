function nbDig(n, d) {
    let squares = Array.from({length: n + 1}, (_,k)=> (k**2).toString());
  
  return squares.join('').split(d.toString()).length - 1;
}