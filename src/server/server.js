const express = require('express')
const { readFileSync } = require('fs')
const helmet = require('helmet')
const logger = require('morgan')
const { join } = require('path')

const renderClient = require('./middleware/render-client')

const app = module.exports = express()

app.use(helmet())
app.use(logger('dev'))

const { ASSETS_BASE_URL: assetsBaseUrl } = process.env
const config = process.env
const html = readFileSync(join(process.cwd(), 'dist/index.html')).toString()

app.get('*', renderClient({ assetsBaseUrl, config, html }))
