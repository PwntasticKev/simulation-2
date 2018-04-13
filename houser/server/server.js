const express = require('express')
const bodyParser = require('body-parser')
const port = 3005
const app = express()
const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()

app.use(bodyParser.json())
massive(process.env.connectionString).then(db => app.set('db', db))

app.get('/api/houses')

app.listen(port,() => {
  console.log(`Listening on port ${port}`)
})