const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Product extends Model {}

Product.init(
  {
    productName: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.NUMBER, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
  },
  { sequelize, modelName: "product", timestamps: false }
);

module.exports = Product;
