const express = require("express");
const router = require("./routes");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(cookieParser());

const start = async () => {
  await mongoose
    .connect(process.env.MONGODB_LINK)
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((e) => {
      console.log("DB ERROR: ", e);
    });

    console.log(process.env.MONGODB_LINK)

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

try {
  start();
} catch (e) {
  console.log(e);
}
