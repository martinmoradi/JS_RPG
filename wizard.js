class Wizard extends Character {
  constructor(
    name,
    hp = 10,
    maxHp = 10,
    mp = 200,
    maxMp = 200,
    attackDmg = 2,
    status,
    specialMp = 25
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }
}
