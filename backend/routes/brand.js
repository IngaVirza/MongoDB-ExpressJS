const express = require('express');
const Brand = require('../db/brand');
const {
  addBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getBrands,
} = require('../handlers/brand-handler');
const router = express.Router();

router.post('', async (req, res) => {
  let model = req.body;
  let result = await addBrand(model);
  res.send(result);
});

router.put('/:id', async (req, res) => {
  console.log('here');
  let model = req.body;
  let id = req.params['id'];
  await updateBrand(id, model);
  res.send({ message: 'update' });
});

router.delete('/:id', async (req, res) => {
  console.log('here');
  let id = req.params['id'];
  await deleteBrand(id);
  res.send({ message: 'deleted' });
});

router.get('/:id', async (req, res) => {
  let id = req.params['id'];
  let result = await getBrands(id);
  res.send(result);
});

router.get('', async (req, res) => {
  let model = req.body;
  let result = await getBrands(model);
  res.send(result);
});

module.exports = router;
