const express = require('express');
const {
  getNewProducts,
  getFeaturedProducts,
} = require('../handlers/product-handler');
const router = express.Router();

router.get('/new-products', async (req, res) => {
  const product = await getNewProducts();
  res.send(product);
});
router.get('/featured-products', async (req, res) => {
  const product = await getFeaturedProducts();
  res.send(product);
});

module.exports = router;
