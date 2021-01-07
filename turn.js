class Turn {
  constructor(aliveCharacters) {
    this.aliveCharacters = aliveCharacters;
    this.shuffleChars();
    this.charActions();
  }

  shuffleChars() {
    this.aliveCharacters.sort(() => Math.random() - 0.5);
  }

  getVictim(ennemies) {
    return Math.floor(Math.random() * Math.floor(ennemies.length));
  }

  updateAliveCharacters() {
    this.aliveCharacters = this.aliveCharacters.filter(
      (character) => character.hp > 0
    );
  }

  charActions() {
  for (let i = 0; i < this.aliveCharacters.length; i++) {
    const ennemies = this.aliveCharacters.filter(
      (char) => char !== this.aliveCharacters[i] && char.hp > 0
      );
      if (ennemies.length < 1) {
        break;
      }
      const victim = ennemies[this.getVictim(ennemies)];
      console.log(`It's time for ${this.aliveCharacters[i].name} to play.`);
      this.aliveCharacters[i].dealsDamage(
        victim,
        this.aliveCharacters[i].attackDmg
      );
      this.updateAliveCharacters()
      console.log("==========================================================");
    };
  }
}
