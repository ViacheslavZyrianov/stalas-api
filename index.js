const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('short'))

process.sql = mysql.createConnection({
  host: 'den1.mysql3.gear.host',
  user: 'stalasmysql',
  password: 'Fz2qB9Tr6N_?',
  database: 'stalasmysql'
})

const fs = require('fs')
fs.readdirSync('./routes/').forEach(file => {
  app.use(require(`./routes/${file}`))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})