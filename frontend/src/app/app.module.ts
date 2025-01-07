import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerCreateComponent } from './components/customer/customer-create.component';
import { CustomerListComponent } from './components/customer/customer-list.component';
import { AccountCreateComponent } from './components/account/account-create.component';
import { AccountListComponent } from './components/account/account-list.component';
import { TransactionCreateComponent } from './components/transaction/transaction-create.component';
import { TransactionHistoryComponent } from './components/transaction/transaction-history.component';

@NgModule({
declarations: [
AppComponent,
CustomerCreateComponent,
CustomerListComponent,
AccountCreateComponent,
AccountListComponent,
TransactionCreateComponent,
TransactionHistoryComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

