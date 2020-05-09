const PlantService = require('../services/plant.service')
const { errorResponse, successResponse } = require('../helpers/responseDictionary')

const find = async (req, res) => {
  const { data, error } = await PlantService.find(req.query)

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4004].code).json({ ...errorResponse[4004], message: error })
  }
}

const findById = async (req, res) => {
  const { data, error } = await PlantService.findById(req.params.id)

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4004].code).json({ ...errorResponse[4004], message: error })
  }
}

const create = async (req, res) => {
  const { data, error } = await PlantService.create(req.body)

  if (!!data) {
    res.status(successResponse[2003].code).json({ ...successResponse[2003], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const update = async (req, res) => {
  const { data, error } = await PlantService.update(req.body, req.params.id)

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const destroy = async (req, res) => {
  const { data, error } = await PlantService.destroy(req.params)

  if (!!data) {
    res.status(successResponse[2005].code).json({ ...successResponse[2005], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const changePicture = async (req, res) => {
  const { data, error } = await PlantService.changePicture(req.files.picture, req.params)

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

module.exports = {
  find,
  findById,
  create,
  update,
  destroy,
  changePicture,
}
