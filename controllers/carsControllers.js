const Cars = require("../models/Cars");

class CarsControllers {
  async addCar(req, res) {
    try {
      const { name, price, description, reserve, speed, used, mileage, file } =
        req.body;

      const newCar = new Cars({
        name,
        price,
        description,
        reserve,
        speed,
        used,
        mileage,
        file: [...file],
      });

      await newCar.save();
      return res.json({ message: "Adding machine", newCar });
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

  async getCarId(req, res) {
    try {
      const { id } = req.params;

      const detailCar = await Cars.findById(id);
      return res.json(detailCar);
    } catch (error) {
      res.status(400).json({ message: "car not found" });
    }
  }
}

module.exports = new CarsControllers();
