//1
var address = {
	name: "McKenzie Rucker",
	street: "123 N 456 S",
	city: "Provo",
	zip: "84606",
};

console.log(address);

//2
function copy(original) {
  var changeName = {};
  changeName.name = "McKenzie Sue";
  changeName.street = original.street;
  changeName.city = original.city;
  changeName.zip = original.zip;
  return changeName;
}

console.log(address.name);
console.log(copy(address).name);

//3
var number = function(original) {
  var count = 0;
  for (var key in original) {
      count++;
      original[count] = original[key];
      delete original[key];
  }
};

number(address);
console.log(address);

//4
var tournament =
  {
    'Aaron': 3,
    'Jaquelin': 4,
    'Denise': 7.6,
    'Blake:': 3.01,
    'O\'Shaughnessy': undefined,
    'Timothy': 11
  };

var tournamentArray = [];

for (var person in tournament) {
  if (tournament[person]) {
    tournamentArray.push(tournament[person]);
  }
}
tournamentArray.sort(function(a, b) {
  return a > b;
});

console.log(tournamentArray[1]);

//5
var people = [
  {
    name: 'Chewy',
    city: 'Provo'
  },
  {
    name: 'Obiwan',
    city: 'Tucson'
  },
  {
    name: 'Luke',
    city: 'Tatooine'
  },
  {
    name: 'Vader',
    city: 'Provo'
  },
  {
    name: 'Leia',
    city: 'Provo'
  }
];

if (people.city = 'Provo') {
	console.log(people.name);
} else {
	console.log("There are no people from Provo.");
}

//6
var Person = function(name, age, friends) {
	this.name = name;
	this.age = age;
	this.friends = friends;
    this.birthday = function() {
	this.age++;
    };
};

//a
var me = new Person("McKenzie", 22, ["Ryan", "Lucy"]);

console.log(me.age);
me.birthday();
console.log(me.age);

//b
var PersonArray = [
  var ryan = new Person("Ryan", 23, ["Trevor", "Chase"]),
  var lucy = new Person("Lucy", 13, ["Tierney", "Carter"]),
  var sabrina = new Person("Sabrina", 47, ["Ryan", "Lucy"]),
  var amber = new Person("Amber", 24, ["Jeff", "Felicity"]),
  var alyssa = new Person("Alyssa", 24, ["Kent", "Kash"])
];

for (i = 0; i < PersonArray.length, i++) {
  console.log(ryan[i]);
}
