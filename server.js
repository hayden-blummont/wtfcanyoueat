const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const userRoutes = require('./routes/users')

const server = express()

// Middleware

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, '/public')))

// Routes

server.use('/', userRoutes)

module.exports = server
