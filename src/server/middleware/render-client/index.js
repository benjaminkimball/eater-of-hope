const { readFileSync } = require('fs')
const { join } = require('path')

const configScriptTag = require('./config-script-tag')
const filterConfig = require('./filter-config')

const { ASSETS_BASE_URL } = process.env

const config = filterConfig(global.process.env)
const path = join(process.cwd(), 'dist/index.html')
const html = readFileSync(path).toString()
  .replace(/"\//g, `"${ASSETS_BASE_URL}/`)
  .replace('<!-- CONFIG -->', configScriptTag(config))

module.exports = function renderClient () {
  return (req, res) => res.send(html)
}
