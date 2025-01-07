const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');

// Create a new transaction (credit or debit)
router.post('/', transactionController.createTransaction);

// Get transaction history for an account
router.get('/:accountId', transactionController.getTransactionHistory);

module.exports = router;
