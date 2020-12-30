const router = require('express').Router()
const logger = require('../../logger/logger')

router.post('/add', async (req, res, next) => {
  try {
     res.status(200).send(user)
  } catch (error) {
    logger.error('shoppingCartRoutes:add: Error ', { error })
    res.status(500).send({ err: error.message })
  }
})

module.exports = router
