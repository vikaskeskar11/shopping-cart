/**
 * This file has all path and associated express route. app.js loads path and
 * routes
 */

var routes = [
  {
    path: '/version',
    route: require('./api/versionRoute')
  },
  {
    path: '/cart',
    route: require('./api/shoppingCartRoutes')
  }
]

module.exports = {
  httpsRoutes: () => {
    return routes
  }
}
