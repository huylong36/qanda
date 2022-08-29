const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const argon2 = require("argon2");
const bodyParser = require("body-parser");

const authRouter = require("./routers/auth.js");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");
const blogRouter = require("./routers/blog");
const app = express();
const PORT = process.env.port || 5000;
dotenv.config();
const URL =
  "mongodb+srv://dohuylong2000:Dohuylong2000@cluster0.iauhb4y.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('mongoconnect');
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};
connectDB();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/", categoryRouter);
app.use("/blog", blogRouter);


app.use(express.json());
app.listen(PORT, () => {
  console.log(`server is running port  ${PORT}`);
});
