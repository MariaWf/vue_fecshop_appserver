var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"//fecshop.appserver.fancyecommerce.com"',
  WEBSITE_ROOT: '"//demo.fancyecommerce.com"'
})
