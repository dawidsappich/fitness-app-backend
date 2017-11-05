const mongoose = require('mongoose');

let workoutSchema = new mongoose.Schema({
	name: { type: String, required: true }
})

let Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;