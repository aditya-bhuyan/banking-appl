export class Transaction {
    _id?: string;
    accountId: string;
    transactionType: 'Credit' | 'Debit';
    amount: number;
    transactionDate: Date;

    constructor(accountId: string, transactionType: 'Credit' | 'Debit', amount: number) {
        this.accountId = accountId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = new Date();
    }
}
