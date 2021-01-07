class Necromancer extends Character {
  constructor(
    name,
    hp = 10,
    maxHp = 10,
    mp = 60,
    maxMp = 60,
    attackDmg = 2,
    specialMp = 20,
    specialDmg = 5
  ) {
    super(name, hp, mp, attackDmg, maxHp, specialDmg, specialMp, maxMp);
  }
}
