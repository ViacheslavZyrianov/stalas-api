const express = require('express')
const serveStatic = require('serve-static')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const fs = require('fs')

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.use(morgan('short'))
app.use(serveStatic('dist'))

process.sql = mysql.createPool({
  host: 'den1.mysql3.gear.host',
  user: 'stalasmysql',
  password: 'Fz2qB9Tr6N_?',
  database: 'stalasmysql'
})

fs.readdirSync('./routes/').forEach(file => {
  app.use(require(`./routes/${file}`))
})

const port = process.env.PORT || 3004
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})