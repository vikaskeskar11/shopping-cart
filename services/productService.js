const ProductModel = require('../repositories/models/productModel')
const logger = require('../logger/logger')

class ProductService {
  /**
   * @function
   * @name addProducts
   * @param {Array} products
   */
  async addProducts (products) {
    logger.info('ProductService:addProducts: Adding products ')
    const result = await ProductModel.insertMany(products)
    logger.debug('ProductService:addProducts: Added products ', { result })
    logger.info('ProductService:addProducts: Added products ')
  }

  /**
   * @function
   * @name getProducts
   */
  async getProducts () {
    // TODO: Consider pagination support in future
    logger.info('ProductService:getProducts: Getting products ')
    const products = await ProductModel.find({})
    logger.debug('ProductService:getProducts: Products ', { products })
    logger.info('ProductService:getProducts: Products ', { size: products.length })
    return products
  }

  /**
   * @function
   * @name getProductsCount
   */
  async getProductsCount () {
    logger.info('ProductService:getProducts: Getting products ')
    const products = await ProductModel.countDocuments({})
    logger.debug('ProductService:getProducts: Products ', { products })
    logger.info('ProductService:getProducts: Products ', { size: products.length })
    return products
  }

  /**
   * @function
   * @name updateCount
   * @param {String} productId
   */
  async updateCount (productId, count) {
    logger.info('ProductService:updateCount: Updating count ')
    const product = await ProductModel.findById(productId)
    logger.debug('ProductService:updateCount: Product ', { product })
    if (product.remainingQuantity > 0) {
      product.remainingQuantity += count
      await product.save()
      logger.debug('ProductService:updateCount: Product ', { product })
    }
    logger.info('ProductService:updateCount: Updated count ')
  }
}

module.exports = new ProductService()
