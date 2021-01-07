class Figher extends Character {
  constructor(
    name,
    hp = 12,
    maxHp = 12,
    mp = 40,
    maxMp = 40,
    attackDmg = 4,
    status,
    specialMp = 20   
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }

  specialAttack() {
    if (this.mp < 20) {
      console.log("Not enough Mana to perform this action");
    }
  }
}
