const express = require('express');
const router = express.Router();
const DB = require('../models');

/**
 * find all workouts
 */
router.get('/', (req, res) => {
	DB.Workout.find()
		.then(data => res.status(200).json({ success: true, message: data }))
		.catch(errHandler)
})

/**
 * Create a Workout
 */
router.post('/', (req, res) => {
	DB.Workout.create(req.body)
		.then(newWorkout => res.status(201).json({ success: true, message: newWorkout }))
		.catch(errHandler)
})

/**
 * find one workout by ID
 */
router.get('/:workoutID', (req, res) => {
	DB.Workout.findById(req.params.workoutID)
		.then(workout => res.status(200).json({ success: true, message: workout }))
		.catch(errHandler)
})

/**
 * update one workout
 */
router.put('/:workoutID', (req, res) => {
	DB.Workout.findByIdAndUpdate(req.params.workoutID, req.body, { new: true })
		.then(workout => res.json({ success: true, message: workout }))
		.catch(errHandler)
})

/**
 * Delete a workout
 */
router.delete('/:workoutID', (req, res) => {
	DB.Workout.findByIdAndRemove(req.params.workoutID)
		.then(workout => res.json({ success: true, message: workout }))
		.catch(errHandler)
})

function errHandler(err) {
	res.json({ success: false, message: err });
}

module.exports = router;