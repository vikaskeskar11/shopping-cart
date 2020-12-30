/**
 * shopping cart Schema
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  product: { type: Schema.Types.ObjectId, required: true }
},
{
  timestamps: {
    createdAt: 'created',
    updatedAt: 'modified'
  }
}
)
