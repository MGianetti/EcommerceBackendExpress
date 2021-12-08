const express = require("express");
const sequelize = require("./database");

sequelize.sync().then(() => {
  console.log("Db is ready");
});

const app = express();

app.listen(3000, () => {
  console.log("Server is running");
});
