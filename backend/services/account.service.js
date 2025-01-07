const axios = require('axios');

class AccountService {
    static async createAccount(accountData) {
        try {
            const response = await axios.post('/api/account', accountData);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error creating account');
        }
    }

    static async updateAccountBalance(accountId, balanceData) {
        try {
            const response = await axios.put('/api/account/${accountId}', balanceData);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error updating account balance');
        }
    }

    static async getAccountsByCustomerId(customerId) {
        try {
            const response = await axios.get('/api/accounts/${customerId}');
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error fetching accounts');
        }
    }
}

module.exports = AccountService;
