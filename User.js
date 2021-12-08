const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    passWord: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN },
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
