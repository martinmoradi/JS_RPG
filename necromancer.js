class Necromancer extends Character {
  constructor(
    name,
    hp = 10,
    maxHp = 10,
    mp = 60,
    maxMp = 60,
    attackDmg = 2,
    status,
    specialMp = 20
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }
}
