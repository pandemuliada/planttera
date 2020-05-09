const Schema = require('../schemas/room.schema')
const { formatError } = require('../helpers/format')
const { errorResponse } = require('../helpers/responseDictionary')

const createOrUpdate = (req, res, next) => {
  Schema.createOrUpdate
    .validate({ ...req.body }, { abortEarly: false })
    .then(data => next())
    .catch(error => {
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    })
}
module.exports = { createOrUpdate }
