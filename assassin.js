class Assassin extends Character {
  constructor(
    name,
    hp = 6,
    mp = 20,
    attackDmg = 6,
    status,
  ) {
    super(name, hp, mp, attackDmg, status);
  }
}


//  name,
//    (hp = 6),
//    (maxHp = 6),
//    (mp = 20),
//    (maxMp = 20),
//    (attackDmg = 6),
//    status,
//    (specialMp = 20);