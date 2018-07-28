const { readFileSync } = require('fs')
const { join } = require('path')

const configScriptTag = require('./config-script-tag')
const filterConfig = require('./filter-config')

// TODO: Pass in as an option to middleware
const { ASSETS_BASE_URL } = process.env

// TODO: Pass config object as an option to middleware
const config = filterConfig(global.process.env)
// TODO: Pass file or file.toString() as an option to middleware
const file = readFileSync(join(process.cwd(), 'dist/index.html'))
// TODO: Abstract into own file with tests
const html = file.toString()
  .replace(/"\//g, `"${ASSETS_BASE_URL}/`)
  .replace('<!-- CONFIG -->', configScriptTag(config))

module.exports = function renderClient (options = {}) {
  return (req, res) => res.send(html)
}
