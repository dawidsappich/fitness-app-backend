const express = require('express');
const router = express.Router();
const DB = require('../models');

router.get('/:userEmail', (req, res) => {
	DB.Meal.find({ email: req.params.userEmail })
		.then(meals => res.json({ success: true, message: meals }))
})

router.post('/', (req, res) => {
	DB.Meal.create(req.body)
		.then(newMeal => res.json({ success: true, message: newMeal }))
})

module.exports = router;