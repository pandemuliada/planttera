const ShopService = require('../services/shop.service')
const { errorResponse, successResponse } = require('../helpers/responseDictionary')

const findOne = async (req, res) => {
  const { data, error } = await ShopService.findById(1)

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4004].code).json({ ...errorResponse[4004], message: error })
  }
}

const update = async (req, res) => {
  const { data, error } = await ShopService.update(req.body, 1)

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const changeLogo = async (req, res) => {
  const { data, error } = await ShopService.changeLogo(req.files.logo, { id: 1 })

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

module.exports = {
  findOne,
  update,
  changeLogo,
}
