// -- Creating a Middleware 
// Every time we make a req, it fires of, so we can do anything here, have access on req and res

const moment = require("moment")

const logger = (req, res, next) => {
  // console.log('Hello')
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
  next()
}

module.exports = logger