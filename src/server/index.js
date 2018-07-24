const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const { join } = require('path')

const renderClient = require('./middleware/render-client')

const { ASSETS_BASE_URL, NODE_ENV, PORT } = process.env

const app = express()

app.use(helmet())
app.use(logger('dev'))

app.get('*', renderClient({
  assetsUrl: ASSETS_BASE_URL,
  path: join(process.cwd(), 'dist/index.html')
}))

NODE_ENV !== 'test' && app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
