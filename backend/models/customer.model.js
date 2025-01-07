const mongoose = require('mongoose');

// Define the customer schema
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    accountType: { type: String, enum: ['Personal', 'Corporate'], required: true },
    relationships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }]
}, { timestamps: true });

// Create the customer model
module.exports = mongoose.model('Customer', customerSchema);
