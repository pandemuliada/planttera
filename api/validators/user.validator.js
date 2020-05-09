const Schema = require('../schemas/user.schema')
const { formatError } = require('../helpers/format')
const { errorResponse } = require('../helpers/responseDictionary')
const { hashPassword } = require('../helpers/bcrypt')

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

const changePassword = (req, res, next) => {
  const { newPassword, newPasswordConfirm } = req.body
  const requestBody = {
    ...req.body,
    newPassword: hashPassword(newPassword),
    newPasswordConfirm: hashPassword(newPasswordConfirm),
  }

  req.body = requestBody

  Schema.changePassword
    .validate({ ...req.body }, { abortEarly: false })
    .then(data => next())
    .catch(error => {
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    })
}

const changePicture = (req, res, next) => {
  Schema.changePicture
    .validate({ ...req.files }, { abortEarly: false })
    .then(data => next())
    .catch(error => {
      res
        .status(errorResponse[4005].code)
        .json({ ...errorResponse[4005], errors: formatError(error) })
    })
}

module.exports = {
  update,
  changePassword,
  changePicture,
}
