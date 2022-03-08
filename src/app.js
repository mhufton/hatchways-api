const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require('express')
const cors = require('cors')
const app = express()

const apiRouter = require('./api/api.router')

app.get('/allow-cors', function(request, response) {
  response.set('Access-Control-Allow-Origin', '*');
  response.sendFile(__dirname + '/message.json');
})

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;