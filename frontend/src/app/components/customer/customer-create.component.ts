import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
selector: 'app-customer-create',
templateUrl: './customer-create.component.html',
styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent {
customer: Customer = new Customer('', '', '', '', 'Personal');
message: string = '';

constructor(private customerService: CustomerService) {}

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      (response) => {
        this.message = 'Customer created successfully!';
      },
      (error) => {
        this.message = 'Failed to create customer!';
      }
    );
  }
}
