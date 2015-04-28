var ask = require('readline-sync');

//get action input

var monsters = ["Furry", "Sneezy", "Slimey", "Stinky", "Dopey"];
var moods = ["hungry", "lonely", "being bad", "tired"];

function monster() {
	this.name = "";
	this.type = "";
	this.health = 100;
	this.currentMood = "";
}

var currentMonster = new monster();

function monsterGenerator() {
	var randomMonsterGenerator = Math.floor(Math.random() * 4);
	currentMonster.type = monsters[randomMonsterGenerator];
	return monster.type;
}


function startGame() {
	console.log("You find an unusual monster egg at your doorstep.\nYou take it inside and wait patiently for it to hatch.");
	var timerCount = 0;
	var timerID = setInterval(function() { 
		 if (timerCount >= Math.floor(Math.random()*5)+1) {
		 	clearInterval(timerID);
		 	console.log("It hatched!");
			var petName = ask.question('What is the name of your monster?');
			console.log(petName + " is a " + currentMonster.type + " Monster!");
			petName = currentMonster.name;
			return currentMonster.name;
		 } else {
		 	console.log("...");
		 	timerCount++;
		}
	}, 1000);
}

var gameLoop = function() {

	var monsterMoodEvent = function() {
		var randomMoodGenerator = Math.floor(Math.random() * 3);
		monster.currentMood = moods[randomMoodGenerator];
		var timerCount = 0;
		var timerID = setInterval(function() { 
			if (timerCount >= 3) {
			 	clearInterval(timerID);
			 	console.log(currentMonster.name + " is " + monster.currentMood);
			} else {
				console.log("...");
			 	timerCount++;
			}
		}, 1000);
	};

	var checkHealth = function() {
		if (monster.health <= 0) {
			gameOver();
		} else {
			console.log(currentMonster.name + " is at " + currentMonster.health + "% health.")
		}
	};

	function actOnMood() {
		//var action = ask.question('What will you do? Feed, rock, pet, or kick.');
		//console.log(action);
	}
	monsterMoodEvent();
	actOnMood();
	checkHealth();
};

function gameOver() {
	if (monster.health <= 0) {
		console.log(currentMonster.name + "has died. You bury him outside by his favorite tree.")
	}
}

function resetGame() {
	console.log("Game resetting...")
	var timerCount = 0;
	var timerID = setInterval(function() { 
		 if (timerCount >= 3) {
		 	clearInterval(timerID);
		 	startGame();
		 } else {
		 	console.log("...");
		 	timerCount++;
		}
	}, 1000);
}

startGame();
monsterGenerator();
gameLoop();

