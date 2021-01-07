class Monk extends Character {
  constructor(name, hp = 8, mp = 160, attackDmg = 2, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialAbilityName() {
    return "Heal";
  }

  specialAbility() {
    this.mp -= 25;
    if (this.hp + 8 >= this.maxHp) {
      this.hp = this.maxHp;
    } else {
      this.hp += 8;
    }
    return `${this.name} has healed for 8hp`;
  }

  specialDamage() {
    return 0;
  }
}
