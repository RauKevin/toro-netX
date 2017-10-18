const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;