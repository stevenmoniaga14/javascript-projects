function whoWon(player1,player2){
  // Condition to check if player picks any other answer.
  // If validInputs does not match/include what's on the array, return invalid

  const validInputs = ['rock', 'paper', 'scissors'];

  if (!validInputs.includes(player1) || !validInputs.includes(player2)) {
    return 'Invalid input';}


   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   } else {
    return 'Player 1 wins!';
   }
   
 }

 module.exports = whoWon;
