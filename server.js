const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// logging framework
const morgan = require('morgan');
const cors = require('cors');

const PORT = 7777;

// ONLY FOR DEVELOPMENT
// allow CORS
app.use(cors({
	origin: `http://localhost:3000`
}));

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');
const mealRoutes = require('./routes/meals')

// use morgan for logging in development modus
app.use(morgan('dev'));

// use body-parser for incoming requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/workout', workoutRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/meal', mealRoutes);

// listen port to incoming requests
app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`);
})