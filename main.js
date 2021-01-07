console.log("⚔ Welcome ⚔");
const playingGame = new Game();

while (playingGame.isOngoing() == true) {
  playingGame.remainingTurns -= 1;
  playingGame.showTurn();
  new Turn(playingGame.aliveChars());
  playingGame.watchStats()
}
playingGame.endGame();
playingGame.congratulateWinners();