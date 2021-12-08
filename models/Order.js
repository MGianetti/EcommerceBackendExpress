const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Product = require("./Product");

class Order extends Model {}

Order.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    passWord: { type: DataTypes.STRING, allowNull: false },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize, modelName: "order", timestamps: false }
);

Order.hasMany(Product);
Product.belongsTo(Order);

module.exports = Order;
