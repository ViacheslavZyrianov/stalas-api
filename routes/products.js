const router = require('express').Router()

router.get('/products', (req, res) => {
  process.sql.query('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.log('Error occured', err)
      res.sendStatus(500)
    }
    console.log('query parameters', req.query)
    res.json(rows)
  })
})

router.get('/product-columns', (req, res) => {
  process.sql.query('SELECT * FROM product_columns', (err, rows) => {
    if (err) {
      console.log('Error occured', err)
      res.sendStatus(500)
    }
    console.log('query parameters', req.query)
    res.json(rows)
  })
})

module.exports = router