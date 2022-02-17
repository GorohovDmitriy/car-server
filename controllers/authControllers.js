const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcrypt");

class AuthControllers {
  async registration(req, res) {
    try {
      const { name, email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.json({ message: "email exists" });
      }

      const userRole = await Role.findOne({ value: "USER" });
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({
        name,
        email,
        password: hashPassword,
        roles: [userRole.value],
      });

      await user.save();
      return res.json({ message: "User successfully registered", user });
    } catch (error) {
      res.json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: "user not found with this email" });
      }

      const validatePassword = bcrypt.compareSync(password, user.password);
      if (!validatePassword) {
        return res.json({ message: "Invalid password" });
      }

      return res.json({ user });
    } catch (error) {
      res.json({ message: "Login error" });
    }
  }
}

module.exports = new AuthControllers();
