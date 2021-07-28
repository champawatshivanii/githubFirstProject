const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    password: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    isDeleted: { type: Boolean, default: false, required: true },
}, { timestamps: true });

const Demo = model('demos', userSchema);

module.exports = { Demo };