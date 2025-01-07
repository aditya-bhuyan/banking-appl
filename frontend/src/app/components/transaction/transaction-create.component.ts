import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
selector: 'app-transaction-create',
templateUrl: './transaction-create.component.html',
styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent {
transaction: Transaction = new Transaction('', 'Debit', 0);
message: string = '';

constructor(private transactionService: TransactionService) {}

  createTransaction() {
    this.transactionService.createTransaction(this.transaction).subscribe(
      (response) => {
        this.message = 'Transaction processed successfully!';
      },
      (error) => {
        this.message = 'Failed to process transaction!';
      }
    );
  }
}
