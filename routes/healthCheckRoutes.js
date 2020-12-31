/**
 * @file
 * Contains health check related routes
 */
const router = require('express').Router()
const packageInfo = require('../package.json')
const logger = require('../logger/logger')
const os = require('os')

router.get('/', async (req, res, next) => {
  try {
    logger.debug('HealthCheckRoutes:healthCheck: Instance  health', { name: packageInfo.name, hostname: os.hostname(), os: os.platform() })
    res.send({ name: packageInfo.name, runningOn: req.headers.host, hostname: os.hostname(), os: os.platform(), version: packageInfo.version })
  } catch (error) {
    logger.error('HealthCheckRoutes:healthCheck: Failed to send health check ', { error })
    res.status(500).send({ err: error.message })
  }
})

module.exports = router
