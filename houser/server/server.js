const express = require('express')
const bodyParser = require('body-parser')
const port = 3005
const app = express()
const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()

app.use(bodyParser.json())
massive(process.env.connectionString).then(db => app.set('db', db))

app.get('/api/houses', controller.houses)
app.post('/api/houseinfo', controller.houseinfo)
app.delete('/api/deletehouse:id', controller.delete)

app.listen(port,() => {
  console.log(`Listening on port ${port}`)
})





//=============================
//========SQL COMMANDS=========
//=============================

//Create Table
// create table houses (id int serial KEY not null ,
// name text,
// address text, 
// city text,
// state text,
// zipcode integer)

//