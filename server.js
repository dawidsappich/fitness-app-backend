const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// logging framework
const morgan = require('morgan');
const PORT = 3000;
const workoutRoutes = require('./routes/workouts');

// use morgan for logging in development modus
app.use(morgan('dev'));

// use body-parser for incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/workout', workoutRoutes);

// listen port to incoming requests
app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`);
})