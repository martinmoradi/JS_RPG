class Wizard extends Character {
  constructor(name, hp = 10, mp = 200, attackDmg = 2, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Fireball";
  }

  special() {
    this.mp -= 25;
    return `${this.name} used fireball, dealing 7 damage points`
  }

  specialDmg() {
    return 7
  }

}
