const User = require('../models')['User']
const { generateRandomName } = require('../helpers/file')
const { comparePassword } = require('../helpers/bcrypt')

async function findById(id) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const user = await User.findByPk(id)
    const { password, ...data } = user.toJSON()

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
    const user = await User.findOne({
      where: {
        email: body.email,
      },
    })

    if (!!user && user.id != id) {
      throw new Error('Email already exists')
    }

    const updated = await User.update(body, { where: { id } })

    if (!updated) {
      throw new Error('Update failed')
    }
    const updatedUser = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    })

    if (updatedUser) {
      res.data = updatedUser
      return res
    }
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
    const user = await User.findOne({ where: { ...params } })

    if (!user) {
      throw new Error('User not found, failed to upload picture')
    }

    // Upload new user picture
    const path = 'public/upload/users/'
    const uploaded = file.mv(path + picture)
    if (!uploaded) {
      throw new Error('Failed to upload picture')
    }

    const dataToStore = {
      picture: `public/upload/users/${picture}`,
    }

    const updated = await User.update(dataToStore, { where: { ...params } })
    if (!updated) {
      throw new Error('Failed to update user picture')
    } else {
      const updatedUser = await User.findOne({
        where: { ...params },
        attributes: { exclude: ['password'] },
      })
      res.data = updatedUser
      return res
    }
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function changePassword(body, params) {
  const { oldPassword, newPassword, newPasswordConfirm } = body

  let res = {
    data: null,
    error: null,
  }

  try {
    const user = await User.findOne({ where: { ...params } })
    if (!user) {
      throw new Error('Failed to change password, user not found')
    }

    if (!comparePassword(oldPassword, user.password)) {
      throw new Error('Old password is wrong')
    }

    const updatePassword = await User.update({ password: newPassword }, { where: { ...params } })

    if (!updatePassword) {
      throw new Error('Failed to change password')
    }

    const { password, ...data } = user.toJSON()
    res.data = data
    return res
  } catch (error) {
    res.error = error.message
    return res
  }
}

module.exports = {
  findById,
  update,
  changePicture,
  changePassword,
}
