const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000


app.get('/', (req, res) => {
	fetch(process.env['SERVER_URL'])
	  .then(response => response.json())
	  .then(json => res.json(json))
})


app.get('/status', (req, res) => {
	res.json({
		status: 'UP',
		version: '0.0.2'
	})
})

app.get('/env', (req, res) => {
	res.json({
		serverUrl: process.env['SERVER_URL'],
		propertyOne: process.env['PROPERTY_ONE']
	});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})