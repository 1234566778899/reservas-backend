const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    password: String,
    codigo: String,
})

module.exports = model('user', UserSchema);