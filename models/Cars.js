const { Schema, model } = require("mongoose");

const Cars = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  reserve: { type: Number, required: true },
  image: [{ type: String, required: true }],
  speed: { type: Number, required: true },
  used: { type: Boolean, default: false },
  mileage: { type: Number },
});

module.exports = model("Cars", Cars);
