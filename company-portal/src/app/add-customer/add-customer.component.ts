import { Component } from '@angular/core';
import { customer, SharedService } from '../shared.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  id = 0;
  name = '';
  phn = 0;
  address = '';

  constructor(private custservice: SharedService) { }

  addcust() {
    const newc: customer = {
      id: this.id,
      name: this.name,
      phn: this.phn,
      address: this.address
    };
    this.custservice.addcustom(newc);
    this.resetForm();
  }

  resetForm() {
    this.id = 0;
    this.name = '';
    this.phn = 0;
    this.address = '';
  }
}
