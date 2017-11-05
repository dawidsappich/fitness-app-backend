const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// logging framework
const morgan = require('morgan');
const PORT = 7777;
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');

// use morgan for logging in development modus
app.use(morgan('dev'));

// use body-parser for incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/workout', workoutRoutes);
app.use('/api/v1/user', userRoutes);

// listen port to incoming requests
app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`);
})