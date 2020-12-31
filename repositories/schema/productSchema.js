/**
 * Product schema
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  name: { type: Schema.Types.String, required: true },
  description: { type: String },
  price: { type: Number },
  totalQuantity: { type: Number, default: 0 },
  remainingQuantity: { type: Number, default: 0 }
  // Assumption: Default price is in INR for all products
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'modified'
  }
})
