const axios = require('axios');

class CustomerService {
    static async createCustomer(customerData) {
        try {
            const response = await axios.post('/api/customer', customerData);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error creating customer');
        }
    }

    static async getCustomerById(customerId) {
        try {
            const response = await axios.get('/api/customer/${customerId}');
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error fetching customer');
        }
    }
}

module.exports = CustomerService;
