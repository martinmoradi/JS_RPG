class Monk extends Character {
  constructor(
    name,
    hp = 8,
    mp = 160,
    attackDmg = 2,
    status
  ) {
     super(name, hp, mp, attackDmg, status);
  }
}
