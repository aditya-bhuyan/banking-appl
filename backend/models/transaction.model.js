const mongoose = require('mongoose');

// Define the transaction schema
const transactionSchema = new mongoose.Schema({
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    type: { type: String, enum: ['credit', 'debit'], required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: false },
    status: { type: String, enum: ['Success', 'Failed'], default: 'Success' }
}, { timestamps: true });

// Create the transaction model
module.exports = mongoose.model('Transaction', transactionSchema);
