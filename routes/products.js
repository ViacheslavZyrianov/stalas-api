const router = require('express').Router()

router.get('/products', (req, res) => {
  const orderBy = {
    column: req.query.orderBy.split(',')[0],
    direction: req.query.orderBy.split(',')[1]
  }

  const searchByNameQuery = req.query.search ? `WHERE name LIKE '%${req.query.search}%'` : ''

  const sqlQuery = [
    'SELECT COUNT(id) FROM products',
    `SELECT * FROM products ${searchByNameQuery} ORDER BY ${orderBy.column} ${orderBy.direction} LIMIT ${req.query.offset}, ${req.query.limit}`
  ].join(';')

  process.sql.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log('Error occured', err)
      res.sendStatus(500)
    }
    res.json({
      config: {
        total: rows[0][0]['COUNT(id)']
      },
      list: rows[1]
    })
    res.end()
  })
})

router.post('/products', (req, res) => {
  console.log('res.body', res.body)
  // process.sql.query('INSERT INTO products VALUES ()')
})

router.get('/product-columns', (req, res) => {
  process.sql.query('SELECT * FROM product_columns', (err, rows) => {
    if (err) {
      console.log('Error occured', err)
      res.sendStatus(500)
    }
    // console.log('query parameters', req.query)
    res.json(rows)
  })
})

module.exports = router