var a = 100;
var b = 5;

if (a >= b) {
	console.log(b);
} else {
	console.log(a);
}


var barack = 'Barack Obama';
var mitt = 'Mitt Romney';
var paul = 'Paul Ryan';

var vote = prompt('Who do you vote for: ' + barack +  ', ' + mitt + ', ' + 'or ' + paul + '?');

if (vote !== null) {
	console.log('You voted!');
} else {
	console.log('You did not vote!');
}

// OLD RENDITIONS
// var morning = true;
// var afternoon = false;
// var night = false;

// if (morning === true) {
// 	console.log("Good morning!");
// } else if (afternoon === true) {
// 	console.log("Good afternoon!");
// } else {
// 	console.log("Good night!");
// }


// var time = 10;

// if (time < 12) {
// 	console.log("Good morning!");
// } else if (12 < time < 17) {
// 	console.log("Good afternoon!");
// } else {
// 	console.log("Good night!");
// }


var date = new Date(2015, 4, 9, 23, 47);
var hour = date.getHours();

console.log(hour);

if (hour < 12) {
	console.log("Good morning!");
} else if (12 > hour || hour < 17) {
	console.log("Good afternoon!");
} else {
	console.log("Good night!");
}



