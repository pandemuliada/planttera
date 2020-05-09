const { errorResponse, successResponse } = require('../helpers/responseDictionary')
const AuthService = require('../services/auth.service')

const register = async (req, res) => {
  const { data, error } = await AuthService.register({ ...req.body })

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const { data: token, error } = await AuthService.login({ email, password })

  if (token) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data: { token } })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

module.exports = {
  login,
  register,
}
