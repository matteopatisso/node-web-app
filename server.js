const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000


app.get('/', (req, res) => {
	fetch('https://viac-invest-hello-world-server:4000')
	  .then(response => response.json())
	  .then(json => res.json(json))
})


app.get('/status', (req, res) => {
	res.json({
		status: 'UP',
		version: '0.0.1'
	})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})