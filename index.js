const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

function start() {
  try {
    mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.vrcym.mongodb.net/car-store?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {}
}
start();
