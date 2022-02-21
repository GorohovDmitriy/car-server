const Cars = require("../models/Cars");

class CarsControllers {
  async addCar(req, res) {
    try {
      const { name, price, description, reserve, speed, used, mileage, image } =
        req.body;

      const newCar = new Cars({
        name,
        price,
        description,
        reserve,
        speed,
        used,
        mileage,
        image: [...image],
      });

      await newCar.save();
      return res.json({ message: "Adding machine" });
    } catch (error) {
      res.status(400).json({ message: "Adding error car " });
    }
  }

  async getCar(req, res) {
    try {
      const cars = await Cars.find();
      return res.json(cars);
    } catch (error) {
      res.status(400).json({ message: "Cars error" });
    }
  }
}

module.exports = new CarsControllers();
