const Transaction = require('../models/transaction.model');
const Account = require('../models/account.model');

// Create a new transaction (credit or debit)
exports.createTransaction = async (req, res) => {
    try {
        const { accountId, type, amount, description } = req.body;

        const account = await Account.findById(accountId);
        if (!account || account.status === 'Closed') {
            return res.status(404).json({ message: 'Account not found or closed' });
        }

        let updatedBalance;
        if (type === 'credit') {
            updatedBalance = account.balance + amount;
        } else if (type === 'debit') {
            if (account.balance < amount) {
                return res.status(400).json({ message: 'Insufficient balance' });
            }
            updatedBalance = account.balance - amount;
        } else {
            return res.status(400).json({ message: 'Invalid transaction type' });
        }

        // Create a new transaction
        const newTransaction = new Transaction({ accountId, type, amount, description });
        await newTransaction.save();

        // Update the account balance
        account.balance = updatedBalance;
        await account.save();

        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ message: 'Error processing transaction', error: error.message });
    }
};

// Get transaction history for an account
exports.getTransactionHistory = async (req, res) => {
    try {
        const transactions = await Transaction.find({ accountId: req.params.accountId });
        if (!transactions || transactions.length === 0) {
            return res.status(404).json({ message: 'No transactions found' });
        }

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error: error.message });
    }
};
