const serialize = require('serialize-javascript')

module.exports = function renderClient ({ assetsBaseUrl, html }) {
  const url = `"${assetsBaseUrl}/`
  const initialState = {}
  const tag = `<script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>`
  const response = html.replace(/"\//g, url).replace('<!-- INITIAL STATE -->', tag)

  return (req, res) => res.send(response)
}
