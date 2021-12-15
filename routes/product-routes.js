const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/new', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (error) {
    res.status(500);
  }
});

router.get('/all', async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
