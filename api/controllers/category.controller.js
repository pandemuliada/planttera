const CategoryService = require('../services/category.service')
const { errorResponse, successResponse } = require('../helpers/responseDictionary')

const find = async (req, res) => {
  const { data, error } = await CategoryService.find(req.query)

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4004].code).json({ ...errorResponse[4004], message: error })
  }
}

const findById = async (req, res) => {
  const { data, error } = await CategoryService.findById(req.params.id)

  if (!!data) {
    res.status(successResponse[2001].code).json({ ...successResponse[2001], data })
  } else if (error) {
    res.status(errorResponse[4004].code).json({ ...errorResponse[4004], message: error })
  }
}

const create = async (req, res) => {
  const { data, error } = await CategoryService.create(req.body)

  if (!!data) {
    res.status(successResponse[2003].code).json({ ...successResponse[2003], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const update = async (req, res) => {
  const { data, error } = await CategoryService.update(req.body, req.params.id)

  if (!!data) {
    res.status(successResponse[2004].code).json({ ...successResponse[2004], data })
  } else if (error) {
    res.status(errorResponse[4005].code).json({ ...errorResponse[4005], message: error })
  }
}

const destroy = async (req, res) => {
  const { data, error } = await CategoryService.destroy(req.params)

  if (!!data) {
    res.status(successResponse[2005].code).json({ ...successResponse[2005], data })
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
}
