const express = require('express')
const { readFileSync } = require('fs')
const helmet = require('helmet')
const { join } = require('path')

const logging = require('../../lib/logging')

const renderClient = require('./middleware/render-client')

const app = module.exports = express()

app.use(helmet())
app.use(logging.requestLogger)

const { ASSETS_BASE_URL: assetsBaseUrl } = process.env
const config = process.env
const html = readFileSync(join(process.cwd(), 'dist/index.html')).toString()

app.get('*', renderClient({ assetsBaseUrl, config, html }))

app.use(logging.errorLogger)
