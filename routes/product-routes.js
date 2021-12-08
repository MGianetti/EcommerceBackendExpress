const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/new", async (req, res) => {
  await Product.create({
    ...req.body,
    ecommerceStoreName: "My store",
  });
  res.send("sucess");
});

router.get("/all", async (req, res) => {
  const allProducts = await Product.findAll();
  res.send(allProducts);
});

module.exports = router;
