module.exports = function renderClient ({ assetsBaseUrl, html }) {
  return (req, res) => res.send(html.replace(/"\//g, `"${assetsBaseUrl}/`))
}
