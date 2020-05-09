const Schema = require('../schemas/shop.schema')
const { formatError } = require('../helpers/format')
const { errorResponse } = require('../helpers/responseDictionary')

const update = (req, res, next) => {
  Schema.update
    .validate({ ...req.body }, { abortEarly: false })
    .then(data => next())
    .catch(error => {
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    })
}

const changeLogo = (req, res, next) => {
  Schema.changeLogo
    .validate({ ...req.files }, { abortEarly: false })
    .then(data => next())
    .catch(error => {
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    })
}

module.exports = { update, changeLogo }
