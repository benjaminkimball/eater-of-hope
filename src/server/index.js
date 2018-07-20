const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

const { NODE_ENV, PORT } = process.env

const app = express()

const { readFileSync } = require('fs')
const { join } = require('path')

const html = readFileSync(join(process.cwd(), 'dist/index.html'))
  .toString()
  .replace(/"\//g, '"http://localhost:1234/')

app.use(helmet())
app.use(logger('dev'))

app.get('*', (req, res) => {
  res.type('text/html')
  res.end(html)
})

NODE_ENV !== 'test' && app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
