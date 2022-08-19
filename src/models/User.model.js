const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
}, {
    timestamps: true,
});

// cifrar las contraseña
UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

// devolver un true o false si el usuario esta logeado
UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const model = mongoose.model('User', UserSchema);

module.exports = model;