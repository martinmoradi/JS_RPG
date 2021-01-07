console.log("⚔ Welcome ⚔");
const playingGame = new Game();

while (playingGame.remainingTurns > 0) {
  playingGame.remainingTurns -= 1;
  playingGame.showTurn();
  const turn = new Turn(playingGame.characters);
}

playingGame.endGame();
