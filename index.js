const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/auth", authRoute);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.vrcym.mongodb.net/car-store?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
