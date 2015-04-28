var XMLHttpRequest = require('xhr2');

var request = new XMLHttpRequest();

request.open('GET','http://pokeapi.co/api/v1/pokemon/25/');

request.onload = function()
{
  var data = JSON.parse(request.response);
  console.log("Pokemon Name: " + data.name);
  console.log("Speed: " + data.speed);
  console.log("Weight: " + data.weight);
  console.log("Favorite Move: " + data.moves[2].name);
  console.log("_¶___________¶¶¶\n_¶¶__________¶__¶\n¶__¶_________¶___¶\n¶___¶________¶___¶\n¶____¶_______¶____¶¶¶¶¶¶\n¶_____¶______¶__________¶¶\n¶______¶¶¶__¶_¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶¶\n¶_____¶___¶¶_¶¶¶¶________________¶¶¶¶\n_¶___¶___¶¶___¶¶___________¶¶¶¶¶¶\n__¶__¶__¶___¶_____¶___¶¶¶¶_¶\n___¶_¶_¶______________¶¶¶¶_¶\n¶¶¶__¶¶_________¶¶¶¶______¶\n¶___¶__¶_________¶¶____¶__¶\n_¶___¶_¶_________________¶\n__¶__¶_¶________________¶¶\n___¶_¶¶___________________¶¶\n____¶¶_________________¶¶___¶\n____¶_________________¶__¶___¶\n___¶_________________¶____¶¶¶¶\n__¶___________________¶\n__¶____________________¶\n__¶_____¶¶¶¶¶¶¶¶_______¶\n___¶__¶¶________¶¶____¶\n___¶__¶___________¶____¶¶\n__¶¶¶¶_____________¶¶¶¶¶¶¶¶");

};

request.send();
