class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack
        
    def __str__(self): return "Fighter({}, {}, {})".format(self.name, self.health, self.damage_per_attack)
    __repr__=__str__
​
​
def declare_winner(fighter1, fighter2, first_attacker):
    the_attacker = fighter1 if fighter1.name == first_attacker else fighter2
    the_defender = fighter2 if fighter1.name == first_attacker else fighter1
    
    while fighter1.health > 0 and fighter2.health > 0:
        the_defender.health -= the_attacker.damage_per_attack
        
        if the_defender.health <= 0:
            return the_attacker.name
    
        the_defender, the_attacker = the_attacker, the_defender
        