class Paladin extends Character {
  constructor(
    name,
    hp = 16,
    maxHp = 16,
    mp = 160,
    maxMp = 160,
    attackDmg = 3,
    specialMp = 40,
    specialDmg = 4
  ) {
    super(name, hp, mp, attackDmg, maxHp, specialDmg, specialMp, maxMp);
  }
}
