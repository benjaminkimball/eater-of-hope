import express from 'express'
import { readFileSync } from 'fs'
import helmet from 'helmet'
import logger from 'morgan'
import { join } from 'path'

import renderClient from './middleware/render-client'

const app = express()
export default app

app.use(helmet())
app.use(logger('dev'))

const { ASSETS_BASE_URL: assetsBaseUrl } = process.env
const config = process.env
const html = readFileSync(join(process.cwd(), 'dist/index.html')).toString()

app.get('*', renderClient({ assetsBaseUrl, config, html }))
