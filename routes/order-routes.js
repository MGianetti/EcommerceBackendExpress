const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const Product = require('../models/Product');

router.get('/all', async (req, res) => {
  try {
    const allOrders = await Order.findAll({ include: Product });
    res.send(allOrders);
  } catch (error) {
    res.status(500);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { productsIdList } = req.body;
    const newOrder = await Order.create();

    productsIdList.map(async id => {
      const product = await Product.findOne({ where: { id } });
      newOrder.addProduct(product);
    });

    res.send(newOrder);
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
