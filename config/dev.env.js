'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CRUD_BASE_URL: '"https://localhost:5001/api/v1/"'
})
