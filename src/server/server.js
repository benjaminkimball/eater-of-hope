const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const { join } = require('path')

const { ASSETS_BASE_URL } = process.env

const app = module.exports = express()

app.use(helmet())
app.use(logger('dev'))

const { readFileSync } = require('fs')
const serialize = require('serialize-javascript')

const filterConfig = (configObj) => Object.entries(configObj)
  .filter(([key]) => key.startsWith('CLIENT_'))
  .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {})

const configScriptTag = (configObj) =>
  `<script>window.__CONFIGURATION__ = ${serialize(configObj)}</script>`

const config = filterConfig(global.process.env)
const path = join(process.cwd(), 'dist/index.html')
const html = readFileSync(path).toString()
  .replace(/"\//g, `"${ASSETS_BASE_URL}/`)
  .replace('<!-- CONFIGURATION -->', configScriptTag(config))

app.get('*', (req, res) => res.send(html))
