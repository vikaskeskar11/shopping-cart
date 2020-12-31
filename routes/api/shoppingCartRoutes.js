const router = require('express').Router()
const logger = require('../../logger/logger')
const shoppingCartService = require('../../services/shoppingCartService')

router.post('/', async (req, res, next) => {
  try {
    await shoppingCartService.add(req.body.productId)
    res.status(200).send({ msg: 'cart.success.add' })
  } catch (error) {
    logger.error('shoppingCartRoutes:add: Error ', { error })
    res.status(500).send({ err: error.message })
  }
})

router.delete('/', async (req, res, next) => {
  try {
    await shoppingCartService.remove(req.body.productId)
    res.status(200).send({ msg: 'cart.success.remove' })
  } catch (error) {
    logger.error('shoppingCartRoutes:remove: Error ', { error })
    res.status(500).send({ err: error.message })
  }
})

router.delete('/all', async (req, res, next) => {
  try {
    await shoppingCartService.removeAll(req.body)
    res.status(200).send({ msg: 'cart.success.removeAll' })
  } catch (error) {
    logger.error('shoppingCartRoutes:removeAll: Error ', { error })
    res.status(500).send({ err: error.message })
  }
})

router.get('/', async (req, res, next) => {
  try {
    const products = await shoppingCartService.getAll()
    res.status(200).send({ products })
  } catch (error) {
    logger.error('shoppingCartRoutes:remove: Error ', { error })
    res.status(500).send({ err: error.message })
  }
})

module.exports = router
