const User = require('../models')['User']
const { comparePassword } = require('../helpers/bcrypt')
const { generateJwt } = require('../helpers/jwt')

async function register(data) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const user = await User.findOne({ where: { email: data.email } })
    if (!!user) {
      throw new Error('Email already exists')
    }

    const newUser = await User.create(data)
    const { password, ...rest } = newUser.toJSON()

    if (newUser) {
      res.data = { ...rest }
      return res
    }

    throw new Error('Register failed')
  } catch (error) {
    res.error = error.message
    return res
  }
}

async function login({ email, password }) {
  let res = {
    data: null,
    error: null,
  }

  try {
    const user = await User.findOne({ where: { email } })

    if (user) {
      const passwordMatch = comparePassword(password, user.password)

      if (!!user && passwordMatch) {
        const token = generateJwt({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        })
        res.data = token
        return res
      } else {
        throw new Error("Password doesn't match")
      }
    }

    throw new Error('Email not exists')
  } catch (error) {
    res.error = error.message
    return res
  }
}

module.exports = {
  register,
  login,
}
