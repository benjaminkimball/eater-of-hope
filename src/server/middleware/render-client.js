module.exports = function renderClient ({ assetsBaseUrl, html } = {}) {
  if (!assetsBaseUrl) throw TypeError('options.assetsBaseUrl is required')
  if (!html) throw TypeError('options.html is required')

  return (req, res) => res.send(html.replace(/"\//g, `"${assetsBaseUrl}/`))
}
