/**
 * This file has all path and associated express route. app.js loads path and
 * routes
 */

var routes = [
  {
    path: '/version',
    route: require('./versionRoute')
  },
  {
    path: '/healthCheck',
    route: require('./healthCheckRoutes')
  },
  {
    path: '/api/cart',
    route: require('./api/shoppingCartRoutes')
  },
  {
    path: '/api/products',
    route: require('./api/productRoutes')
  }
]

module.exports = {
  httpsRoutes: () => {
    return routes
  }
}
