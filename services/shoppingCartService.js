const ShoppingCartModel = require('../repositories/models/shoppingCartModel')
const logger = require('../logger/logger')
const shoppingCartModel = require('../repositories/models/shoppingCartModel')

class ShoppingCartService {
  /**
   * @function
   * @name getAll
   * @description Get all products from cart
   */
  async getAll () {
    logger.info('ShoppingCartService:getAll: Getting shopping cart products ')
    const products = await ShoppingCartModel
      .find()
      .populate('product')
      .lean()
    logger.debug('ShoppingCartService:getAll: Products ', { products })
    logger.info('ShoppingCartService:getAll: Found products in cart ', { productsSize: products.length })
    return products
  }

  /**
   * @function
   * @name add
   * @param {String} productId
   * @description Add product into cart
   */
  async add (productId) {
    logger.info('ShoppingCartService:add: Adding product in cart ', { productId })
    const cartProduct = new ShoppingCartModel({
      product: productId
    })
    const result = await cartProduct.save()
    logger.debug('ShoppingCartService:add: Added product in cart ', { productId, result })
    logger.info('ShoppingCartService:add: Added product in cart ', { productId })
  }

  /**
   * @function
   * @name remove
   * @param {String} productId
   * @description Remove product from cart
   */
  async remove (productId) {
    logger.info('ShoppingCartService:remove: Removing product from cart ', { productId })
    const result = await shoppingCartModel.findOneAndRemove({
      product: productId
    })
    logger.debug('ShoppingCartService:remove: Removed product from cart ', { productId, result })
    logger.info('ShoppingCartService:remove: Removed product from cart ', { productId })
  }

  /**
   * @function
   * @name removeAll
   * @param {Array} productIds
   * @description Remove all products from cart
   */
  async removeAll (productIds) {
    logger.info('ShoppingCartService:remove: Removing products from cart ', { productIds })
    const result = await shoppingCartModel.findOneAndRemove({
      product: { $in: productIds }
    })
    logger.debug('ShoppingCartService:remove: Removed product from cart ', { productIds, result })
    logger.info('ShoppingCartService:remove: Removed product from cart ', { productIds })
  }
}

module.exports = new ShoppingCartService()
