const app = require('express')()

const config = require('./config')
const loader = require('./loaders')

const port = config.port || '3000'
const host = config.host || '127.0.0.1'

async function startServer() {
  // Init application
  await loader.init({ expressApp: app })

  app.listen(port, host, () => console.log(`Server running on http://${host}:${port}`))
}

startServer()
