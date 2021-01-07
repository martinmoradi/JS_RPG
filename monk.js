class Monk extends Character {
  constructor(
    name,
    hp = 8,
    maxHp = 8,
    mp = 160,
    maxMp = 160,
    attackDmg = 2,
    status,
    specialMp = 25
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }
}
