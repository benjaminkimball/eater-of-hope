const serialize = require('serialize-javascript')

const filterConfig = require('./filter-config')

module.exports = function renderClient ({ assetsBaseUrl, config, html }) {
  const url = `"${assetsBaseUrl}/`
  const initialState = { config: filterConfig(config) }
  const tag = `<script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>`
  const response = html.replace(/"\//g, url).replace('<!-- INITIAL STATE -->', tag)

  return (req, res) => res.send(response)
}
