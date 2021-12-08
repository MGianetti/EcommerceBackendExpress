const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/new", async (req, res) => {
  const { name, email, username, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    username,
    password,
  });
  res.send(newUser.username);
});

router.get("/auth", async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findByPk(userName);
  if (user.password === password) {
    res.send({
      userName: userName,
      isAuthenticated: true,
      isAdmin: user.isAdmin,
    });
  } else {
    res.send({
      userName: null,
      isAuthenticated: false,
      isAdmin: false,
    });
  }
});

module.exports = router;
