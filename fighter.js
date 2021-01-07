class Figher extends Character {
  constructor(
    name,
    hp = 12,
    maxHp = 12,
    mp = 40,
    maxMp = 40,
    attackDmg = 4,
    specialMp = 20,
    specialDmg = 5
  ) {
    super(name, hp, mp, attackDmg, maxHp, specialDmg, specialMp, maxMp);
  }

  specialAttack() {
    if (this.mp < 20) {
      console.log("Not enough Mana to perform this action");
    }
  }
}
