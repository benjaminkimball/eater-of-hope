const nconf = module.exports = require('nconf')
const { join } = require('path')

nconf
  .env(['ASSETS_BASE_URL', 'NODE_ENV'])
  .file(join(__dirname, 'config.json'))
  .defaults({ ASSETS_BASE_URL: 'http://localhost:1234' })
