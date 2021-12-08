const express = require("express");
const sequelize = require("./database");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const Ecommerce = require("./models/Ecommerce");

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes);

const orderRoutes = require("./routes/order-routes");
app.use("/api/order", orderRoutes);

const productRoutes = require("./routes/product-routes");
app.use("/api/product", productRoutes);

sequelize.sync().then(() => {
  //Ecommerce.create({ storeName: "My store" });
  console.log("Db is ready");
  app.listen(3000, () => {
    console.log("Server is running");
  });
});
