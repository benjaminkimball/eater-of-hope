const serialize = require('serialize-javascript')

module.exports = function configScriptTag (config = {}) {
  if (typeof config !== 'object') config = {}

  return `<script>window.__CONFIG__ = ${serialize(config)}</script>`
}
