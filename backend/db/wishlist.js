const mongoose = require('mongoose');
const wishListSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  productsId: Array(string),
});

const Wishlist = mongoose.model('wishlist', wishListSchema);
module.exports = Wishlist;
