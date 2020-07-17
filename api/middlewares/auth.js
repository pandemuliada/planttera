const { verifyJwt } = require('../helpers/jwt')

const authentication = (req, res, next) => {
  try {
    let token = req.headers['x-access-token'] || req.headers['authorization']

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }

    if (token) {
      const decodedToken = verifyJwt(token)
      req.user = decodedToken
      next()
    }
  } catch (error) {
    res.errorResponse(4002)
  }
}

module.exports = { authentication }
