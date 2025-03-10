import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
selector: 'app-customer-list',
templateUrl: './customer-list.component.html',
styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers: Customer[] = [];

constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
}
