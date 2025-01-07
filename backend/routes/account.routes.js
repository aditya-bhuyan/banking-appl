const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account.controller');

// Create a new account
router.post('/', accountController.createAccount);

// Get all accounts for a customer
router.get('/:customerId', accountController.getAccountsByCustomerId);

// Update account balance
router.put('/:accountId', accountController.updateAccountBalance);

// Close account
router.put('/close/:accountId', accountController.closeAccount);

module.exports = router;
