const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const serialize = require('serialize-javascript')

const { ASSETS_BASE_URL, NODE_ENV, PORT } = process.env

const app = express()

const { readFileSync } = require('fs')
const { join } = require('path')

function getFilteredClientConfigObj (configObj) {
  return {
    process: {
      env: Object.entries(configObj)
        .filter(([key]) => key.startsWith('CLIENT_'))
        .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {})
    }
  }
}

function getConfigScriptTag (configObj) {
  return `<script>window.global = ${serialize(config)}</script>`
}

const config = getFilteredClientConfigObj(global.process.env)
const html = readFileSync(join(process.cwd(), 'dist/index.html'))
  .toString()
  .replace(/"\//g, `"${ASSETS_BASE_URL}/`)
  .replace('<!-- CONFIGURATION -->', getConfigScriptTag(config))

app.use(helmet())
app.use(logger('dev'))

app.get('*', (req, res) => res.send(html))

NODE_ENV !== 'test' && app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
