const router = require('express').Router()

router.get('/products', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  process.sql.query('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.log('Error occured', err)
      res.sendStatus(500)
    }
    console.log('query parameters', req.query)
    res.json(rows)
  })
})

module.exports = router