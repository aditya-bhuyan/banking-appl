import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
selector: 'app-transaction-history',
templateUrl: './transaction-history.component.html',
styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
transactions: Transaction[] = [];

constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data: Transaction[]) => {
      this.transactions = data;
    });
  }
}
