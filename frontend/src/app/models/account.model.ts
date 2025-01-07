export class Account {
    _id?: string;
    customerId: string;
    accountNumber: string;
    accountType: 'Checking' | 'Savings' | 'Loan';
    balance: number;
    status: 'Active' | 'Closed';

    constructor(customerId: string, accountNumber: string, accountType: 'Checking' | 'Savings' | 'Loan', balance: number, status: 'Active' | 'Closed') {
        this.customerId = customerId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
        this.status = status;
    }
}
