const jwt = require('jsonwebtoken')

const secret = process.env.SECRET_JWT || 'secretkey'

const generateJwt = payload => {
  return jwt.sign(payload, secret, { expiresIn: '1h' })
}

const verifyJwt = token => {
  return jwt.verify(token, secret)
}

module.exports = {
  generateJwt,
  verifyJwt,
}
