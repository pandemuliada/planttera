const responseDictionary = require('./responseDictionary')

function responseSerializer(req, res, next) {
  res.successResponse = function(code, data) {
    res.status(responseDictionary.successResponse[code].code).json({
      ...responseDictionary.successResponse[code],
      ...data,
    })
  }

  res.errorResponse = function(code, error) {
    res.status(responseDictionary.errorResponse[code].code).json({
      ...responseDictionary.errorResponse[code],
      ...error,
    })
  }

  next()
}

module.exports = {
  responseSerializer,
}
