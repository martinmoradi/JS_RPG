class Game {
  constructor() {
    this.remainingTurns = 10;
    this.characters = new Array();
    this.initializeCharacters();
    this.watchStats;
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
    this.aliveChars().forEach((winner) => (winner.status = "winner"));
    this.aliveChars().forEach((winner) =>
      console.log(`${winner.name} a gagné !`)
    );
  }

  showTurn() {
    console.log(`This is the turn ${10 - this.remainingTurns}.`);
    console.log("( ఠൠఠ )ﾉ FIGHT !");
  }

  watchStats() {
    console.log("Characters currently alive :");
    this.characters
      .filter((character) => {
        character.status === "playing";
      })
      .forEach((character) => {
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
