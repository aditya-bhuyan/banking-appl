const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

// Create a new customer
router.post('/', customerController.createCustomer);

// Get customer by ID
router.get('/:id', customerController.getCustomerById);

// Update customer details
router.put('/:id', customerController.updateCustomer);

// Delete customer by ID
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
