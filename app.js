require('dotenv').config()
const express = require('express')

const indexRoute = require('./routes/index')
const competentieRoute = require('./routes/competentie')
const errorRoute = require('./routes/error')

module.exports = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

  .use('/', indexRoute)
  .use('/v1/competentie', competentieRoute)
  .use(errorRoute)
