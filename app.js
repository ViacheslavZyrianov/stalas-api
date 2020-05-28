const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('short'))

const connection = mysql.createConnection({
  host: 'den1.mysql3.gear.host',
  user: 'stalasmysql',
  password: 'Fz2qB9Tr6N_?',
  database: 'stalasmysql'
})

app.get('/api/products', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  connection.query('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.log('Error occured', err)
      res.sendStatus(500)
    }
    res.json(rows)
  })
})

app.listen(3003, () => {
  console.log('Listening on port 3003')
})