class Game {
  constructor() {
    this.remainingTurns = 10;
    this.characters = new Array();
    this.initializeCharacters();
    this.watchStats()
  }

  showChar() {
   this.characters.forEach(char => console.log(char))
  }
  initializeCharacters() {
    this.characters.push(
      new Assassin("Carl"),
      new Berzerker("Draven"),
      new Figher("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Wizard("Khadgar"),
      new Necromancer("Kel'Thuzad")
    );
    console.log(`${this.characters.length} challengers entered the arena !`);
  }

  endGame() {
    console.log("Game is over !");
  }

  congratulateWinners() {
    this.aliveChars().forEach((winner) =>
    console.log(`${winner.name} won the game !`)
    );
    this.aliveChars().forEach((winner) => (winner.status = "winner"));
  }

  showTurn() {
    console.log(
      `This is the turn ${10 - this.remainingTurns}. ( ఠൠఠ )ﾉ FIGHT !`
    );
  }

  watchStats() {
    console.log("Characters currently alive :");
    this.aliveChars().forEach((character) => {
      console.log(character.stats());
    });
  }

  aliveChars() {
    return this.characters.filter((char) => char.status === "playing");
  }

  isOngoing() {
    if (this.aliveChars().length > 1 && this.remainingTurns > 1) {
      return true;
    } else {
      return false;
    }
  }
}
