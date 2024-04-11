var express = require('express');
var fs = require('fs');

var app = express();
var PORT = 8080;

// http.createServer(function (req, res) {
//   fs.readFile('page.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

app.get('/', (req, res) => {
	fs.readFile('page.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.get('/reference', (req, res) => {
	fs.readFile('res/Reference.json', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.get('/plan', (req, res) => {
	fs.readFile('res/Plan.json', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.get('/pendu', (req, res) => {
	fs.readFile('res/Pendu.json', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.get('/offFairway', (req, res) => {
	fs.readFile('res/OffFairway.json', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.get('/tour', (req, res) => {
	fs.readFile('res/Tour.json', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.get('/isabella', (req, res) => {
	fs.readFile('res/Isabella.json', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.send();
	});
})

app.listen(PORT, () => {
 	console.log(`Example app listening on port ${PORT}`)
})