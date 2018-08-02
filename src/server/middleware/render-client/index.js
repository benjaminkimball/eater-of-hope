import serialize from 'serialize-javascript'

import filterConfig from './filter-config'

import React from 'react'
import { renderToNodeStream } from 'react-dom/server'

import App from '../../../common/app'

export default function renderClient ({ assetsBaseUrl, config, html }) {
  const url = `"${assetsBaseUrl}/`
  const tag = `<script>window.__CONFIG__ = ${serialize(filterConfig(config))}</script>`
  const response = html.replace(/"\//g, url).replace('<!-- CONFIG -->', tag)
  const [htmlStart, htmlEnd] = response.split('<!-- ROOT -->')

  return (req, res) => {
    res.type('html').write(htmlStart)

    const render = renderToNodeStream(<App />)
    render.pipe(res, { end: false })
    render.on('end', () => res.end(htmlEnd))
  }
}
