const { Router } = require("express");
const User = require("../models/User");

const router = Router();

router.post("/signin", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res.status(300).json({ message: "this email is already taken" });
    }

    const user = new User({
      email,
      password,
      name,
    });

    await user.save();

    res.status(201).json({ message: "Administrator created" });
  } catch (error) {
    res.send({ message: "Error" });
  }
});

module.exports = router;
