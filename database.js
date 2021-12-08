const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "ecommerce-db",
  "admin-user",
  "9C1AD00A16A7C67E2727B471AC969E96",
  {
    dialect: "sqlite",
    host: "./ecommerce.sqlite",
  }
);

module.exports = sequelize;
