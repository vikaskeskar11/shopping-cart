const productService = require('../services/productService');

(async () => {
  const initData = require('./initData.json')
  if (await productService.getProductsCount() === 0) {
    productService.addProducts(initData.products)
  }
})()
