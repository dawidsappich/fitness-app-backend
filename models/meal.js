const mongoose = require('mongoose');

let mealSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true }
})

let Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;