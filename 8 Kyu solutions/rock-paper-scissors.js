//Let's play! You have to return which player won! In case of a draw return Draw!.




const rps = (p1, p2) => {
  const r = 'rock'
  const p = 'paper'
  const s = 'scissors'
  if ((p1 === r && p2 === p)
      ||(p1 === p && p2 === s)
      ||(p1 === s && p2 === r)){
    return 'Player 2 won!'
  }else if(p1 === p2){
    return 'Draw!'
  }else{return 'Player 1 won!'}
};
