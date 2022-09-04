let player1 = prompt("Enter the player1 name: ");
let player2 = prompt("Enter the player2 name: ");
let pl1Score = 0;
let pl2Score = 0;
let round = 0;

function bacanjeKockice() {
  console.clear();
  round++;
  let k1 = Math.ceil(Math.random() * 6);
  let k2 = Math.ceil(Math.random() * 6);
  pl1Score += k1; //
  pl2Score += k2;

  console.log("*** ROUND " + round + " ***");
  console.log(player1 + " : " + k1 + " --- " + k2 + " : " + player2);
  console.log(
    player1 + "(" + pl1Score + ")   " + player2 + "(" + pl2Score + ")"
  );
  console.log();

  if (round === 10) {
    winner();
  } else {
    setTimeout(bacanjeKockice, 1000);
  }
}
bacanjeKockice();

function winner(params) {
  if (pl1Score > pl2Score) {
    console.log("WINNER IS: " + player1);
  } else if (pl1Score < pl2Score) {
    console.log("WINNER IS: " + player2);
  } else {
    console.log("No Winner!");
  }
}
