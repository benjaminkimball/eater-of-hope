const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

const renderClient = require('./middleware/render-client')

const app = module.exports = express()

app.use(helmet())
app.use(logger('dev'))

app.get('*', renderClient())
