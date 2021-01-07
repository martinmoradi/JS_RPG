class Paladin extends Character {
  constructor(
    name,
    hp = 16,
    mp = 160,
    attackDmg = 3,
    status
  ) {
     super(name, hp, mp, attackDmg, status);
  }
}
