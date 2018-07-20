const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

const { NODE_ENV, PORT } = process.env

const app = express()

app.use(helmet())
app.use(logger('dev'))

app.get('*', (req, res) => {
  res.end('Hey.')
})

NODE_ENV !== 'test' && app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
