/**
 * Shopping cart Model
 */
const mongoose = require('mongoose')
const shoppingCartSchema = require('../schema/shoppingCartSchema')

module.exports = mongoose.model('shoppingCart', shoppingCartSchema, 'shoppingCarts')
