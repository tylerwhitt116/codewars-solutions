   function Fighter(name, health, damagePerAttack){
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
  };
​
function declareWinner(fighter1, fighter2, firstAttacker) {
      let off = fighter1.name === firstAttacker ? fighter1 : fighter2;
      let def = fighter1.name === firstAttacker ? fighter2: fighter1;
  
    while(fighter1.health > 0 && fighter2.health > 0){
      def.health -= off.damagePerAttack;
      
      if( def.health <= 0 ){
        return off.name;
      }
    [off, def] = [def, off]
    }
};