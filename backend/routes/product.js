const express = require('express');
const router = express.Router();
const Product = require('./../db/product');
const {
  addProduct,
  getProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require('../handlers/product-handler');

router.post('', async (req, res) => {
  let model = req.body;
  let product = await addProduct(model);
  res.send(product);
});

router.put('/:id', async (req, res) => {
  let model = req.body;
  let id = req.params['id'];
  await updateProduct(id, model);
  res.send({ message: 'updated' });
});

router.delete('/:id', async (req, res) => {
  let id = req.params['id'];
  await deleteProduct(id);
  res.send({ message: 'deleted' });
});

router.get('/:id', async (req, res) => {
  let id = req.params['id'];
  let product = await getProduct(id);
  res.send(product);
});

router.get('/', async (req, res) => {
  let products = await getAllProducts();
  res.send(products);
});

module.exports = router;