'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const devFirebase = require('./dev.firebase.js')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE: JSON.stringify(devFirebase)
})
