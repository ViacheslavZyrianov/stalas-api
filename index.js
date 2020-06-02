const express = require('express')
const history = require('connect-history-api-fallback')
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
app.use(history())
app.use(serveStatic('dist'))

process.sql = mysql.createConnection({
  host: 'den1.mysql3.gear.host',
  user: 'stalasmysql',
  password: 'Fz2qB9Tr6N_?',
  database: 'stalasmysql'
})

fs.readdirSync('./app/routes/').forEach(file => {
  app.use(require(`./routes/${file}`))
})

const port = process.env.PORT || 3003
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})