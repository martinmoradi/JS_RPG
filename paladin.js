class Paladin extends Character {
  constructor(name, hp = 16, mp = 160, attackDmg = 3, status) {
    super(name, hp, mp, attackDmg, status);
  }

  specialName() {
    return "Healing Lighting (40MP)";
  }

  special() {
    this.mp -= 40;
    if (this.hp + 4 >= this.maxHp) {
      this.hp = this.maxHp;
    } else {
      this.hp += 4;
    }
  }

}
