const axios = require('axios');

class TransactionService {
    static async createTransaction(transactionData) {
        try {
            const response = await axios.post('/api/transaction', transactionData);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error processing transaction');
        }
    }

    static async getTransactionHistory(accountId) {
        try {
            const response = await axios.get(`/api/transactions/${accountId}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message || 'Error fetching transaction history');
        }
    }
}

module.exports = TransactionService;
