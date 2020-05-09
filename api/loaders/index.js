const expressLoader = require('./express')

const init = async ({ expressApp }) => {
  await expressLoader({ app: expressApp })
  console.log('Express Intialized')
  // Initialize another loader if needed ...
}

module.exports = {
  init,
}
