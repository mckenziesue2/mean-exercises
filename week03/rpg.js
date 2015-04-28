var weapons = ["Longsword", "Axe", "Throwing Knife", "Brass Knuckles", "Bow"];

var randomAttackPwr = function() {
	return Math.floor(Math.random() * 10) + 1;
}

function Character(type, hp, attackPwr, weapon)
{
        this.type = type;
        this.hp = hp;
        this.attackPwr = attackPwr;
        this.weapon = weapon || null;
}

var player = new Character("John", 20, 15, weapons[2]);
var succubus = new Character("Succubus", 20, 20);

var attackEnemy = function(characterToBeAttacked, attacker)
{
	    var thisInstanceAttackPwr = randomAttackPwr();
        characterToBeAttacked.hp -= thisInstanceAttackPwr;
        console.log("You attacked the " + characterToBeAttacked.type + " with a " + attacker.weapon + " for " + thisInstanceAttackPwr + "hp");
}

attackEnemy(succubus, player);
