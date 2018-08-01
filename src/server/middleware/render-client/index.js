import serialize from 'serialize-javascript'

import filterConfig from './filter-config'

export default function renderClient ({ assetsBaseUrl, config, html }) {
  const url = `"${assetsBaseUrl}/`
  const tag = `<script>window.__CONFIG__ = ${serialize(filterConfig(config))}</script>`
  const response = html.replace(/"\//g, url).replace('<!-- CONFIG -->', tag)
  const [htmlStart, htmlEnd] = response.split('<!-- ROOT -->')

  return (req, res) => {
    res.type('html').write(htmlStart)
    res.end(htmlEnd)
  }
}
