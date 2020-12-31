const router = require('express').Router()
const logger = require('../../logger/logger')
const productService = require('../../services/productService')

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.getProducts()
    res.status(200).send({ products })
  } catch (error) {
    logger.error('productRoutes:add: Error ', { error })
    res.status(500).send({ err: error.message })
  }
})

module.exports = router
