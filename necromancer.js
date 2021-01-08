class Necromancer extends Character {
  constructor(name, hp = 10, mp = 60, attackDmg = 2, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Dark Harvest (20MP)";
  }
}
