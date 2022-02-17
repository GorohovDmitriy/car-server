const express = require("express");
const router = express.Router();
const controller = require("../controllers/authControllers");

router.post("/register", controller.registration);
router.post("/login", controller.login);

module.exports = router;
