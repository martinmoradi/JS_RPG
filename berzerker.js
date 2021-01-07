class Berzerker extends Character {
  constructor(
    name,
    hp = 8,
    mp = 0,
    attackDmg = 4,
    status    
  ) {
     super(name, hp, mp, attackDmg, status);
  }

  specialAbilityName() {
    return "Rage"
  }

  specialAbility() {
    this.hp -= 1
    this.attackDmg += 1
    return `{this.name} enrages, gaining 1 permanent damage at the cost of 1 health`
  }
  
}
