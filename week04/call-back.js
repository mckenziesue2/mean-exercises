// //These are TYPES
// var animal = "alligator";

// var sum = 45;

// var results = 5.0;

// var value = Number;

// var thing = undefined;

// //Variable in object type
// var car = {
// 	color: "red",
// 	engine: "v12",
// 	model: "R8"
// };

// //Variable in function type
// var killTheCat = function() {
// 	console.log("wam bam dead");
// }


// var messageScrambler = function(message, callback) {

// 	setTimeout(function() {
// 		var scrambledMessage = message.split('').sort(function() {
// 			return 0.5 - Math.random();
// 		}).join('');
// 		callback(scrambledMessage);
// 	}, 1000);
// };

// var printScramble = function(newMessage) {
// 	console.log(newMessage);
// };

// var myScrambledMessage = messageScrambler('Roses are red, Violets are blue, I can\'t rhyme, and neither can you!', printScramble);
// console.log(myScrambledMessage);




var sendNuke = function(location, success, failure) {
	var time = Math.floor(Math.random() * 4000);
	console.log('Sending Nuke to: ' + location);

	setTimeout(function() {
		var hitOrMiss = Math.floor(Math.random() * 2);
		var casualties = Math.floor(Math.random() * 5000000);

		if (hitOrMiss === 0) {
			success(casualties, location);
		} else {
			failure('You missed! The inhabitants of ' + location + ' are safe.');

		}
	}, time)
}

var onSuccess = function(hits, place) {
	console.log('Hit! You achieved ' + hits + 'casualties.' + place + ' is toast!');
}

var onFailure = function(msg) {
	console.log(msg);
}

sendNuke('Iraq', onSuccess, onFailure);




