const Schema = require('../schemas/auth.schema')
const { formatError } = require('../helpers/format')
const { hashPassword } = require('../helpers/bcrypt')
const { errorResponse } = require('../helpers/responseDictionary')

const register = (req, res, next) => {
  const { password } = req.body
  if (password) req.body.password = hashPassword(password)

  Schema.register
    .validate({ ...req.body }, { abortEarly: false })
    .then(data => {
      next()
    })
    .catch(error =>
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    )
}

const login = (req, res, next) => {
  Schema.login
    .validate({ ...req.body }, { abortEarly: false })
    .then(() => next())
    .catch(error =>
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    )
}

module.exports = {
  register,
  login,
}
