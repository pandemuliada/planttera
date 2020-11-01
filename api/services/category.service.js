const Category = require('../models')['Category']

async function find(params) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Category.findAll({
      where: { ...params },
      include: [{ all: true }],
    })

    if (data) {
      res.data = data
      return res
    }

    throw new Error('Data not found')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function findOne(id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Category.findByPk(id)

    if (data) {
      res.data = data
      return res
    }

    throw new Error('Data not found')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function create(body) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const category = await Category.findOne({
      where: {
        name: body.name,
      },
    })

    if (!!category) {
      throw new Error('Category already exists')
    }

    const newCategory = await Category.create(body)

    if (newCategory) {
      res.data = newCategory
      return res
    }

    throw new Error('Create failed')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function update(body, id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const category = await Category.findOne({
      where: {
        name: body.name,
      },
    })

    if (!!category && category.id != id) {
      throw new Error('Category already exists')
    }

    const updated = await Category.update(body, { where: { id } })

    if (!updated) {
      throw new Error('Update failed')
    }
    const updatedCategory = await Category.findByPk(id)

    if (updatedCategory) {
      res.data = updatedCategory
      return res
    }
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function destroy(params) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const category = await Category.findOne({ where: { ...params } })
    if (!category) {
      throw new Error('Delete failed, category not found')
    }

    const deleted = await Category.destroy({ where: { ...params } })

    if (deleted) {
      res.data = category
      return res
    }

    throw new Error('Delete failed')
  } catch (error) {
    res.error = error.message
    return res
  }
}

module.exports = {
  find,
  findOne,
  create,
  update,
  destroy,
}
