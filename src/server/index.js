const express = require('express')
const { readFileSync } = require('fs')
const helmet = require('helmet')
const { join } = require('path')

const config = require('../../config')
const logging = require('../../lib/logging')

const renderClient = require('./middleware/render-client')

const app = module.exports = express()

app.use(helmet())
app.use(logging.requestLogger)

app.get('*', renderClient({
  assetsBaseUrl: config.get('ASSETS_BASE_URL'),
  html: readFileSync(join(process.cwd(), 'dist/index.html')).toString()
}))

app.use(logging.errorLogger)

if (module === require.main) {
  app.listen(5000, () => {
    console.log('Server running at http://localhost:5000')
  })
}
