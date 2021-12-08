const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Product = require("./Product");
const User = require("./User");

class Order extends Model {}

Order.init(
  {
    orderId: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "order", timestamps: false }
);

Order.belongsToMany(Product, { through: "OrderProducts" });
Product.belongsToMany(Order, { through: "OrderProducts" });
Order.belongsTo(User);

module.exports = Order;
