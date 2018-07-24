const { readFileSync } = require('fs')
const serialize = require('serialize-javascript')

const getConfig = (configObj) => ({
  process: {
    env: Object.entries(configObj)
      .filter(([key]) => key.startsWith('CLIENT_'))
      .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {})
  }
})

const getConfigScriptTag = (configObj) =>
  `<script>window.global = ${serialize(configObj)}</script>`

module.exports = ({ assetsUrl, path }) => {
  const config = getConfig(global.process.env)
  const html = readFileSync(path)
    .toString()
    .replace(/"\//g, `"${assetsUrl}/`)
    .replace('<!-- CONFIGURATION -->', getConfigScriptTag(config))

  return (req, res) => res.send(html)
}
