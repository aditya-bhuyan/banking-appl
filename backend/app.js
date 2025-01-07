const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customer.routes');
const accountRoutes = require('./routes/account.routes');
const transactionRoutes = require('./routes/transaction.routes');
const app = express();

app.use(express.json());

// Use the routes
app.use('/api', customerRoutes);
app.use('/api', accountRoutes);
app.use('/api', transactionRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/banking-app')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports = app;

