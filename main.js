console.log("⚔ Welcome ⚔");
const playingGame = new Game();

while (playingGame.isOngoing() == true) {
  console.log(playingGame.isOngoing())
  playingGame.remainingTurns -= 1;
  playingGame.showTurn();
  const turn = new Turn(playingGame.characters);
}

playingGame.endGame();
