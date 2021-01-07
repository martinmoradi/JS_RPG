class Wizard extends Character {
  constructor(
    name,
    hp = 10,
    mp = 200,
    attackDmg = 2,
    status
  ) {
     super(name, hp, mp, attackDmg, status);
  }
}
