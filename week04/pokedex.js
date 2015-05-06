$.ajax('http://pokeapi.co/api/v1/pokemon',
       {method: 'GET'})
.done(function (data) {
  console.log(data);
}).fail(function () {
  console.log('error');
});


// //Get name

// pokemon.name
// pokemon.weight
// pokemon.height
// pokemon.abilities[0]
