class Character {
  constructor(name, hp, mp, dmg, status = "playing") {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.dmg = dmg;
    this.status = status;
  }

}