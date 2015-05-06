var request = require('request');

var contacts, messages;

request('http://mean.codingcamp.us:8000/contacts', incoming_contacts);

function incoming_contacts(error, response, body) {
	contacts = JSON.parse(body);
	if (messages) process_data();
}

request('http://mean.codingcamp.us:8000/messages', incoming_messages);

function incoming_messages(error, response, body) {
	messages = JSON.parse(body);
	if (contacts) process_data();
}

function process_data() {
	console.log(messages);
	console.log(contacts);
}
