const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  name: { type: String },
  role: { type: String, default: "reader" },
});

module.exports = model("User", schema);
