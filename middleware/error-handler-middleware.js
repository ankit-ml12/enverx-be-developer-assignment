const { StatusCodes } = require('http-status-codes')
const erroHandlerMiddleware = (err, req, res, next) => {
  res.status(StatusCodes.BAD_REQUEST).json({ err })
}
module.exports = erroHandlerMiddleware
