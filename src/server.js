const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./config/db')
const dataRoutes = require('./routes/dataRoutes')

//db connection
db()
app.use(express.json())
app.use(dataRoutes)

const port = 3000;

app.listen(port, () => {
  console.log('Listening at', port)
})