const express = require("express");
const router = express.Router();
const controller = require("../controllers/carsControllers");

router.post("/create", controller.addCar);
router.get("/get", controller.getCar);
router.get("/details/:id", controller.getCarId);

module.exports = router;
