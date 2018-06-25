const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getEstablishments (testConn) {
  const conn = testConn || connection
  return conn('establishments').select()
}

module.exports = {
  getEstablishments: getEstablishments
}
