const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true },
  category_id: { type: Number },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);