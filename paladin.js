class Paladin extends Character {
  constructor(
    name,
    hp = 16,
    maxHp = 16,
    mp = 160,
    maxMp = 160,
    attackDmg = 3,
    status,
    specialMp = 40
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }
}
