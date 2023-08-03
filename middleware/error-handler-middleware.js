const { StatusCodes } = require('http-status-codes')
const erroHandlerMiddleware = (err, req, res, next) => {
  console.log('err:', err)
  res.status(StatusCodes.BAD_REQUEST).json({ err })
}
module.exports = erroHandlerMiddleware
