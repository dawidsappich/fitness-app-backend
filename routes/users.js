const express = require('express');
const router = express.Router();
const DB = require('../models');
const config = require('../config');
const jwt = require('jsonwebtoken');


/**
 * get all users
 */
// router.get('/', (req, res) => {
// 	DB.User.find()
// 		.then(users => res.json({ success: true, message: users }))
// 		.catch(errHandler);
// })

/**
 * create a user
 */
router.post('/register', (req, res) => {
	// basic sanity check
	if (!req.body.email) {
		res.json({ success: false, message: 'no email provided' });
	} else if (!req.body.password) {
		res.json({ success: false, message: 'no password provided' });
	} else {
		DB.User.create(req.body)
			.then(newUser => res.status(201).json({ success: true, message: 'user registered' }))
			.catch(errHandler)
	}
})

router.post('/login', (req, res) => {
	DB.User.findOne({ email: req.body.email })
		.then(user => {
			if (!user) {
				res.json('no user found')
			} else {
				// compare hashed password
				const isValidPassword = user.comparePassword(req.body.password);

				if (!isValidPassword) {
					res.json({ success: false, message: 'password does not match' })
				} else {

					// generate jwt token to be stored in local Storage by app
					const token = jwt.sign({ userID: user._id }, config.secret, { expiresIn: '24h' })

					res.json({ success: true, message: 'OK', token: token, user: { email: user.email } })
				}
			}
		})
		.catch(errHandler)
})



function errHandler(err) {
	res.status(400).json({ success: false, message: err });
}

module.exports = router;