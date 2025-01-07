import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account.model';

@Component({
selector: 'app-account-create',
templateUrl: './account-create.component.html',
styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {
account: Account = new Account('', '', 'Checking', 0, 'Active');
message: string = '';

constructor(private accountService: AccountService) {}

  createAccount() {
    this.accountService.createAccount(this.account).subscribe(
      (response) => {
        this.message = 'Account created successfully!';
      },
      (error) => {
        this.message = 'Failed to create account!';
      }
    );
  }
}
