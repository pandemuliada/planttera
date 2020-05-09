const Plant = require('../models')['Plant']
const { generateRandomName } = require('../helpers/file')

async function find(params) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Plant.findAll({
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

async function findById(id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Plant.findByPk(id, {
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

async function create(body) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const plant = await Plant.findOne({
      where: {
        name: body.name,
      },
    })

    if (!!plant) {
      throw new Error('Plant already exists')
    }

    const newPlant = await Plant.create(body)

    if (newPlant) {
      res.data = newPlant
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
    const plant = await Plant.findOne({
      where: {
        name: body.name,
      },
      include: [{ all: true }],
    })

    if (!!plant && plant.id != id) {
      throw new Error('Plant already exists')
    }

    const updated = await Plant.update(body, { where: { id } })

    if (!updated) {
      throw new Error('Update failed')
    }
    const updatedPlant = await Plant.findByPk(id)

    if (updatedPlant) {
      res.data = updatedPlant
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
    const plant = await Plant.findOne({ where: { ...params } })
    if (!plant) {
      throw new Error('Delete failed, plant not found')
    }

    const deleted = await Plant.destroy({ where: { ...params } })

    if (deleted) {
      res.data = plant
      return res
    }

    throw new Error('Delete failed')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function changePicture(file, params) {
  let res = {
    data: null,
    error: null,
  }

  const picture = generateRandomName(file)

  try {
    const plant = await Plant.findOne({ where: { ...params } })

    if (!plant) {
      throw new Error('Plant not found, failed to upload picture')
    }

    // Upload new plant picture
    const path = 'public/upload/plants/'
    const uploaded = file.mv(path + picture)
    if (!uploaded) {
      throw new Error('Failed to upload picture')
    }

    const dataToStore = {
      picture: `public/upload/plants/${picture}`,
    }

    const updated = await Plant.update(dataToStore, { where: { ...params } })
    if (!updated) {
      throw new Error('Failed to update plant picture')
    } else {
      const updatedPlant = await Plant.findOne({ where: { ...params } })
      res.data = updatedPlant
      return res
    }
  } catch (error) {
    res.error = error.message
    return res
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
