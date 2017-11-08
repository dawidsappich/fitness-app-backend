const mongoose = require('mongoose');
// show verbose messages in backend log
mongoose.set('debug', true);
// connect to db
mongoose.connect('mongodb://dawid:rhqaprtksxX4@localhost/fitnessapp', { useMongoClient: true });
// use native NODE Promises
mongoose.Promise = global.Promise;

module.exports.Workout = require('./workout');
module.exports.User = require('./user');
module.exports.Meal = require('./meal');