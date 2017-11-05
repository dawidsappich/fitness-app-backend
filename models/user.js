const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

let userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

/**
 * middleware to hash password before storing in database
 */
userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	} else {
		bcrypt.hash(this.password, null, null, (err, hash) => {
			if (err) {
				return next(err);
			} else {
				this.password = hash;
				next();
			}
		})
	}
})

userSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
}

let User = mongoose.model('User', userSchema);

module.exports = User;