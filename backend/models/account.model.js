const mongoose = require('mongoose');

// Define the account schema
const accountSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    accountType: { type: String, enum: ['Savings', 'Checking', 'CreditCard', 'Loan'], required: true },
    balance: { type: Number, default: 0 },
    status: { type: String, enum: ['Active', 'Closed'], default: 'Active' }
}, { timestamps: true });

// Create the account model
module.exports = mongoose.model('Account', accountSchema);
