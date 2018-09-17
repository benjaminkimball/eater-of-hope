const expressWinston = require('express-winston')
const winston = require('winston')

module.exports = {
  requestLogger: expressWinston.logger({
    transports: [new winston.transports.Console()]
  }),
  errorLogger: expressWinston.errorLogger({
    transports: [new winston.transports.Console()]
  })
}
