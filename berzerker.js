class Berzerker extends Character {
  constructor(
    name,
    hp = 8,
    maxHp = 8,
    mp = 0,
    maxMp = 0,
    attackDmg = 4,
    status,
    specialMp = NaN
    
  ) {
    super(name, hp, mp, attackDmg, maxHp, maxMp, status, specialMp);
  }
}
