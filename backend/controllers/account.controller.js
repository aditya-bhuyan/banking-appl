const Account = require('../models/account.model');
const Customer = require('../models/customer.model');

// Create a new account
exports.createAccount = async (req, res) => {
    try {
        const { customerId, accountType, balance } = req.body;

        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const newAccount = new Account({ customerId, accountType, balance });
        await newAccount.save();

        // Add the account to the customer relationships
        customer.relationships.push(newAccount._id);
        await customer.save();

        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({ message: 'Error creating account', error: error.message });
    }
};

// Get all accounts for a customer
exports.getAccountsByCustomerId = async (req, res) => {
    try {
        const accounts = await Account.find({ customerId: req.params.customerId });
        if (!accounts || accounts.length === 0) {
            return res.status(404).json({ message: 'No accounts found for this customer' });
        }
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving accounts', error: error.message });
    }
};

// Update account balance
exports.updateAccountBalance = async (req, res) => {
    try {
        const { balance } = req.body;

        const updatedAccount = await Account.findByIdAndUpdate(
            req.params.accountId,
            { balance },
            { new: true }
        );

        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({ message: 'Error updating account balance', error: error.message });
    }
};

// Close account
exports.closeAccount = async (req, res) => {
    try {
        const closedAccount = await Account.findByIdAndUpdate(
            req.params.accountId,
            { status: 'Closed' },
            { new: true }
        );

        if (!closedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.status(200).json(closedAccount);
    } catch (error) {
        res.status(500).json({ message: 'Error closing account', error: error.message });
    }
};
