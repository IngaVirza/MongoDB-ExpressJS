const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  shotDescription: String,
  purchagePrice: Number,
  sellingPRice: Number,
  images: Array(string),
  categoryId: { type: Schema.Types.ObjectId, ref: 'categories' },
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;
