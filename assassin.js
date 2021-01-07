class Assassin extends Character {
  constructor(
    name,
    hp = 6,
    maxHp = 6,
    mp = 20,
    maxMp = 20,
    attackDmg = 6,
    status, 
    specialMp = 20
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }
}
