class Figher extends Character {
  constructor(name, hp = 12, mp = 40, attackDmg = 4, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialAbilityName() {
    return "Dark Vision";
  }

  specialAbility() {
    this.mp -= 40;
    return `${this.name} used Dark Vision, dealing 5 damage points and shielding himself, reducing damage taking until next turn.`;
  }

  specialDamage() {
    return 7;
  }
}
