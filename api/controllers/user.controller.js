const UserService = require('../services/user.service')
const { errorResponse, successResponse } = require('../helpers/responseDictionary')

const changePicture = async (req, res) => {
  const { data, error } = await UserService.changePicture(req.files.picture, req.params)

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

// Current User Function
const currentUser = async (req, res) => {
  const { user } = req
  const { data, error } = await UserService.findById(user.id)

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4004].code).json({ ...errorResponse[4004], message: error })
  }
}

const updateCurrentUser = async (req, res) => {
  const { user } = req
  const { data, error } = await UserService.update(req.body, user.id)

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const changePassword = async (req, res) => {
  const { user } = req

  const { data, error } = await UserService.changePassword(req.body, { id: user.id })

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

module.exports = {
  currentUser,
  changePassword,
  updateCurrentUser,
  changePicture,
}
