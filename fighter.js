class Figher extends Character {
  constructor(
    name,
    hp = 12,
    mp = 40,
    attackDmg = 4,
    status
  ) {
     super(name, hp, mp, attackDmg, status);
  }

  specialAttack() {
    if (this.mp < 20) {
      console.log("Not enough Mana to perform this action");
    }
  }
}
