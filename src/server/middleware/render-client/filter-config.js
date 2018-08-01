module.exports = function filterConfig (config = {}) {
  return Object.entries(config)
    .filter(([key]) => key.startsWith('CLIENT_'))
    .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {})
}