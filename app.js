var express = require('express');
var fs = require('fs');

var app = express();
var PORT = 8080;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Admin:nimda@golfsgapp2024.09jxwl8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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