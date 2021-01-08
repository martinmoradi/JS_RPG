class Character {
  constructor(
    name,
    hp,
    mp,
    attackDmg,
    status = "playing"
  ) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.mp = mp;
    this.maxMp = mp;
    this.attackDmg = attackDmg;
    this.status = status;
    this.player = "ia"
  }

  takesDamage(damage) {
    this.hp -= damage;
    console.log(`${this.name} suffers a ${damage} HP loss.`);
    console.log(`${this.name} has ${this.hp} HP left.`);
  }

  dealsDamage(victim, damage) {
    console.log(`${this.name} attacks ${victim.name}.`);
    victim.takesDamage(damage);
    victim.hp <= 0 ? this.isKilled(victim) : null;
  }

  isKilled(victim) {
    if (victim.hp <= 0) {
      victim.status = "loser";
      this.mp += 20;
      if (this.mp > this.maxMp) {
        this.mp = this.maxMp
      }
      console.log(
        `(×_×) ${this.name} killed ${victim.name} and gained 20 mana points !`
      );
    }
  }

  stats() {
    return `${this.name}, ${this.constructor.name} : ${this.hp}/${this.maxHp}HP | ${this.mp}/${this.maxMp}MP`;
  }

  specialAvailable() {
    this.mp >= this.specialMp ?  true : false;
  }
}
