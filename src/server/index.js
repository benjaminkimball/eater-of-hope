const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const { join } = require('path')

const { ASSETS_BASE_URL, NODE_ENV, PORT } = process.env

const app = express()

app.use(helmet())
app.use(logger('dev'))

const { readFileSync } = require('fs')
const serialize = require('serialize-javascript')

const getConfig = (configObj) => Object.entries(configObj)
  .filter(([key]) => key.startsWith('CLIENT_'))
  .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {})

const getConfigScriptTag = (configObj) =>
  `<script>window.__CONFIGURATION__ = ${serialize(configObj)}</script>`

const config = getConfig(global.process.env)
const path = join(process.cwd(), 'dist/index.html')
const html = readFileSync(path).toString()
  .replace(/"\//g, `"${ASSETS_BASE_URL}/`)
  .replace('<!-- CONFIGURATION -->', getConfigScriptTag(config))

app.get('*', (req, res) => res.send(html))

NODE_ENV !== 'test' && app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
