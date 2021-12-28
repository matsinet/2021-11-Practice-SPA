const { Router } = require("express");
const pizza = require("../models/Pizza");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newPizza = new pizza.model(request.body);
  newPizza.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  pizza.model.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.get("/:id", (request, response) => {
  pizza.model.findById(request.params.id, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  pizza.model.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  pizza.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        crust: body.crust,
        cheese: body.cheese,
        sauce: body.sauce,
        toppings: body.toppings
      }
    },
    {
      new: true
    },
    (error, record) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
