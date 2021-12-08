const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");

class Ecommerce extends Model {}

Ecommerce.init(
  {
    storeName: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  },
  {
    sequelize,
    modelName: "ecommerce",
    timestamps: false,
    freezeTableName: true,
  }
);

Ecommerce.hasMany(User);
User.belongsTo(Ecommerce);

Ecommerce.hasMany(Order);
Order.belongsTo(Ecommerce);

Ecommerce.hasMany(Product);
Product.belongsTo(Ecommerce);

module.exports = Ecommerce;
