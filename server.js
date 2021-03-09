const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000


app.get('/', (req, res) => {
	fetch('viac-invest-hello-world-server:4000')
	  .then(response => response.json())
	  .then(json => res.json(json))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})