class Monk extends Character {
  constructor(
    name,
    hp = 8,
    maxHp = 8,
    mp = 160,
    maxMp = 160,
    attackDmg = 2,
    specialMp = 25,
    specialDmg = NaN
  ) {
    super(name, hp, mp, attackDmg, maxHp, specialDmg, specialMp, maxMp);
  }
}
