class Wizard extends Character {
  constructor(
    name,
    hp = 10,
    maxHp = 10,
    mp = 200,
    maxMp = 200,
    attackDmg = 2,
    specialMp = 25,
    specialDmg = 7
  ) {
    super(name, hp, mp, attackDmg, maxHp, specialDmg, specialMp, maxMp);
  }
}
