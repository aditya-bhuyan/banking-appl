const Customer = require('../models/customer.model');
const Account = require('../models/account.model');

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
        const { name, email, accountType } = req.body;

        // Check if the customer already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ message: 'Customer with this email already exists' });
        }

        const newCustomer = new Customer({ name, email, accountType });
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error creating customer', error: error.message });
    }
};

// Get customer by ID
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id).populate('relationships');
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving customer', error: error.message });
    }
};

// Update customer details
exports.updateCustomer = async (req, res) => {
    try {
        const { name, email, accountType } = req.body;

        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            { name, email, accountType },
            { new: true }
        );

        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error updating customer', error: error.message });
    }
};

// Delete customer by ID
exports.deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting customer', error: error.message });
    }
};
