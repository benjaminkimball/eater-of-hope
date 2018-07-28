const serialize = require('serialize-javascript')

const filterConfig = require('./filter-config')

module.exports = function renderClient ({ assetsBaseUrl, config, html }) {
  const url = `"${assetsBaseUrl}/`
  const tag = `<script>window.__CONFIG__ = ${serialize(filterConfig(config))}</script>`
  const response = html.replace(/"\//g, url).replace('<!-- CONFIG -->', tag)

  return (req, res) => res.send(response)
}
