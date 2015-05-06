var express = require('express')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.send('You just responded to your own GET request!! You are now the client and the server.');
});

app.get('/avengers', function(request, response) {
	response.send('<h3 style="color:green"> Hulk Smash your ugly face. Go Avengers! </h3><p>Iron man is going to kick your butt.<p>')
});

app.post('/uglykittens', function(request, response) {
	response.send('<img src="' + request.body.catUrl + '"/>');
})

app.listen(3000);
console.log('Server running and listening on port 3000');

