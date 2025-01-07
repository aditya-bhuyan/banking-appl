import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './components/customer/customer-create.component';
import { CustomerListComponent } from './components/customer/customer-list.component';
import { AccountCreateComponent } from './components/account/account-create.component';
import { AccountListComponent } from './components/account/account-list.component';
import { TransactionCreateComponent } from './components/transaction/transaction-create.component';
import { TransactionHistoryComponent } from './components/transaction/transaction-history.component';

const routes: Routes = [
{ path: 'customers', component: CustomerListComponent },
{ path: 'create-customer', component: CustomerCreateComponent },
{ path: 'create-account', component: AccountCreateComponent },
{ path: 'accounts', component: AccountListComponent },
{ path: 'create-transaction', component: TransactionCreateComponent },
{ path: 'transaction-history', component: TransactionHistoryComponent },
{ path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
