const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getEstablishments (testConn) {
  const conn = testConn || connection
  return conn('establishments').select()
}

function getEstablishment (id, testConn) {
  const conn = testConn || connection
  return conn('establishments').where({id: id}).select()
}

module.exports = {
  getEstablishments: getEstablishments,
  getEstablishment: getEstablishment
}
