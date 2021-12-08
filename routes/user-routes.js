const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/new", async (req, res) => {
  const newUser = await User.create({
    ...req.body,
    ecommerceStoreName: "My store",
  });
  res.send(newUser.username);
});

module.exports = router;
