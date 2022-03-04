const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const carsRoute = require("./routes/Cars");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/cars", carsRoute);

const PORT = 5000;
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.vrcym.mongodb.net/car-store?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
