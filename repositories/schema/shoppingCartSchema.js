/**
 * shopping cart Schema
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Assumption: Currently, single user is using system
// TODO: Add support for user specific cart
module.exports = new Schema({
  product: { type: Schema.Types.ObjectId, required: true, ref: 'product' }
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'modified'
  }
}
)
