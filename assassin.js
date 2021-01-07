class Assassin extends Character {
  constructor(
    name,
    hp = 6,
    maxHp = 6,
    mp = 20,
    maxMp = 20,
    attackDmg = 6,
    specialMp = 20,
    specialDmg = 7
  ) {
    super(name, hp, mp, attackDmg, maxHp, specialDmg, specialMp, maxMp);
  }
}
