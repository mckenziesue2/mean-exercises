// #1
var string = 'string';

for (i = 0; i < string.length; i++) {
	console.log(string.charAt(i));
}


// #2
var name = 'McKenzie Sue Rucker';

var ask = prompt("Give me a character.");

var search = name.search(ask);

var found = false;

for (i = 0; i < name.length; i++) {
    if (name[i] === ask) {
      console.log(i + 1);
      found = true;
      break;
    }
} 
if (found === false) {
      console.log("This character is not in your name.");
    }



// #3
for (i = 0; i < 43; i++) {
	console.log(i);
}



// #4
for (i = 0; i < 11; i++) {
	console.log(i);
}





