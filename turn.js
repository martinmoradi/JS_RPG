class Turn {
  constructor(aliveCharacters) {
    this.aliveCharacters = aliveCharacters;
    this.shuffleChars();
    this.charActions();
  }

  shuffleChars() {
    this.aliveCharacters.sort(() => Math.random() - 0.5);
  }

  getRandomVictim(ennemies) {
    return Math.floor(Math.random() * Math.floor(ennemies.length));
  }

  updateAliveCharacters() {
    this.aliveCharacters = this.aliveCharacters.filter(
      (character) => character.hp > 0
    );
  }

  charActions() {
    for (let i = 0; i < this.aliveCharacters.length; i++) {
      console.log(`It's time for ${this.aliveCharacters[i].name} to play.`);
      const ennemies = this.aliveCharacters.filter(
        (char) => char !== this.aliveCharacters[i] && char.hp > 0
      );
      if (ennemies.length < 1) {
        break;
      }
      const action = this.selectAction(this.aliveCharacters[i], ennemies);
      const victim = ennemies[this.getRandomVictim(ennemies)];
      this.aliveCharacters[i].dealsDamage(
        victim,
        this.aliveCharacters[i].attackDmg
      );
      this.updateAliveCharacters();
      console.log("==========================================================");
    }
  }

  selectAction(char, ennemies) {
    const killable = ennemies.filter((ennemy) => ennemy.hp <= char.attackDmg);
    if (killable.length >= 1) {
      const victim = killable[this.getRandomVictim(killable)];
      console.log(`${victim.name} CAN BE KILLED BY ${char.name} !!!!!!!!!!`)
    }
  }

}
