const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/new', async (req, res) => {
  try {
    const { name, email, userName, isAdmin } = await User.create(req.body);
    res.send({ name, email, userName, isAdmin });
  } catch (error) {
    res.status(500);
  }
});

router.get('/auth', async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await User.findByPk(email);

    if (user.password === password) {
      res.send({
        name: user.name,
        userName: user.userName,
        email,
        isAuthenticated: true,
        isAdmin: user.isAdmin,
      });
    } else {
      res.send({
        name: null,
        userName: null,
        email: null,
        isAuthenticated: false,
        isAdmin: false,
      });
    }
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
