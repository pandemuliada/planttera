const Shop = require('../models')['Shop']
const { generateRandomName } = require('../helpers/file')

async function findById(id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const data = await Shop.findByPk(id)

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

async function update(body, id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const updated = await Shop.update(body, { where: { id } })

    if (!updated) {
      throw new Error('Update failed')
    }
    const updatedShop = await Shop.findByPk(id)

    if (updatedShop) {
      res.data = updatedShop
      return res
    }
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function changeLogo(file, params) {
  let res = {
    data: null,
    error: null,
  }

  const logo = generateRandomName(file)

  try {
    const shop = await Shop.findOne({ where: { ...params } })

    if (!shop) {
      throw new Error('Shop not found, failed to upload logo')
    }

    // Upload new shop logo
    const path = 'public/upload/shops/'
    const uploaded = file.mv(path + logo)
    if (!uploaded) {
      throw new Error('Failed to upload logo')
    }

    const dataToStore = {
      logo: `public/upload/shops/${logo}`,
    }

    const updated = await Shop.update(dataToStore, { where: { ...params } })
    if (!updated) {
      throw new Error('Failed to update Shop logo')
    } else {
      const updatedShop = await Shop.findOne({ where: { ...params } })
      res.data = updatedShop
      return res
    }
  } catch (error) {
    res.error = error.message
    return res
  }
}

module.exports = {
  findById,
  update,
  changeLogo,
}
