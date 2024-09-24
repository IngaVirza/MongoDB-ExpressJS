const express = require('express');
const {
  getNewProducts,
  getFeaturedProducts,
} = require('../handlers/product-handler');
const { getCategories } = require('../handlers/category-handler');
const router = express.Router();

router.get('/new-products', async (req, res) => {
  const product = await getNewProducts();
  res.send(product);
});
router.get('/featured-products', async (req, res) => {
  const product = await getFeaturedProducts();
  res.send(product);
});

router.get('/categories', async (req, res) => {
  const categories = await getCategories();
  res.send(categories);
});

module.exports = router;
