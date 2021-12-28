const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  crust: String,
  cheese: String,
  sauce: String,
  toppings: [String]
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = {
  schema: pizzaSchema,
  model: Pizza
};
