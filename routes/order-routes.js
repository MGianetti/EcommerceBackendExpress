const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Product = require("../models/Product");

router.get("/all", async (req, res) => {
  const allOrders = await Order.findAll();
  res.send(allOrders);
});

router.post("/new", async (req, res) => {
  const { productsIdList } = req.body;
  const newOrder = await Order.create(req.body);

  productsIdList.map(async (id) => {
    const product = await Product.findAll({ where: { id } });
    newOrder.addProduct(product);
  });

  res.send(newOrder);
});

module.exports = router;
